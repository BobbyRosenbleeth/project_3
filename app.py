from flask import Flask, render_template, redirect,jsonify
from flask_pymongo import PyMongo
import flask_pymongo
from pymongo import MongoClient
import ufo_scrapeBS
import pandas as pd
import json

#create flask instance
app = Flask(__name__)

#establish link to mongo database
app.config["MONGO_URI"] = "mongodb://localhost:27017/aliens_db"
mongo = PyMongo(app)

client = MongoClient("localhost", 27017)
db = client["aliens_db"]
collection = db["ufos"]


@app.route("/")
def index():

    # find one document from our mongo db and return it.
    jandata = mongo.db.aliens.find_one()

    # pass that listing to render_template
    return render_template("index.html", janspecs=jandata)

# set our path to trigger our scrape
@app.route("/scrape")
def scrape():
    
     # create an aliens database
    aliens = mongo.db.aliens
    #Run the scrap function
    jandata = ufo_scrapeBS.scrape_info('https://nuforc.org/webreports/ndxe202301.html')
    febdata = ufo_scrapeBS.scrape_info('https://nuforc.org/webreports/ndxe202302.html')
    mardata = ufo_scrapeBS.scrape_info('https://nuforc.org/webreports/ndxe202303.html')
    # Update the Mongo database 
    for jan in jandata:
        mongo.db.ufos.insert_one(jan)
    for feb in febdata:
        mongo.db.ufos.insert_one(feb)
    for mar in mardata:
        mongo.db.ufos.insert_one(mar)

    return redirect("/", code=302)

@app.route("/statedata/<state>")
def statedata(state):
    if state == "USA":
        jandata = mongo.db.ufos.find({"Country":"USA"},{"_id":0, "State":1, "Shape":1, "Date":1 })
        # code for whole US
    else:    
        jandata = mongo.db.ufos.find({"State":state},{"_id":0, "State":1, "Shape":1, "Date":1 })
    janlist = list(jandata)
    return jsonify(janlist)

@app.route("/ufomap")
def citydata():
    jandata = mongo.db.ufos.find({
        "Country":"USA",
        "Date": {
            "$regex": "^1/\\d{2}/23"
        }
    }, {
        "_id":0, 
        "lat":1, 
        "lng":1,
        "City":1,
        "State": 1
        })
    febdata = mongo.db.ufos.find({
        "Country": "USA",
        "Date": {
            "$regex": "^2/\\d{2}/23"
        }
    }, {
        "_id":0, 
        "lat":1, 
        "lng":1,
        "City":1,
        "State": 1
    })
    mardata = mongo.db.ufos.find({
        "Country": "USA",
        "Date": {"$regex":"^3/"}
    }, {
        "_id":0, 
        "lat":1, 
        "lng":1,
        "City":1,
        "State": 1
    })
       
    janlist = list(jandata)
    feblist = list(febdata)
    marlist = list(mardata)

    # Parse out city and state for each month
    jancities = []
    for sighting in janlist:
        jancities.append({
            "City": sighting["City"],
            "State": sighting["State"]
        })
    
    febcities = []
    for sighting in feblist:
        febcities.append({
            "City": sighting["City"],
            "State": sighting["State"]
        })

    marcities = [] 
    for sighting in marlist: 
        marcities.append({
            "City": sighting["City"],
            "State": sighting["State"]
        })
        

    return jsonify({"January": janlist, "February": feblist, "March": marlist})

@app.route("/statedata2")
def statedata2():
    jandata = mongo.db.ufos.find({"Country":"USA", "Date": {"$regex": "^1/\\d{2}/23"}},{"_id":0, "State":1, "Shape":1})
    Jdf = pd.DataFrame(jandata)
    JstateDF = pd.DataFrame(Jdf.State.value_counts()).reset_index()
    JstateDF.columns = ["states", "counts"]
    states = list(JstateDF.index)
    counts = list(JstateDF.values)

    febdata = mongo.db.ufos.find({"Country":"USA", "Date": {"$regex": "^2/\\d{2}/23"}},{"_id":0, "State":1, "Shape":1})
    Fdf = pd.DataFrame(febdata)
    FstateDF = pd.DataFrame(Fdf.State.value_counts()).reset_index()
    FstateDF.columns = ["states", "counts"]
    states = list(FstateDF.index)
    counts = list(FstateDF.values)

    mardata = mongo.db.ufos.find({"Country":"USA", "Date": {"$regex":"^3/"}},{"_id":0, "State":1, "Shape":1})
    Mdf = pd.DataFrame(mardata)
    MstateDF = pd.DataFrame(Mdf.State.value_counts()).reset_index()
    MstateDF.columns = ["states", "counts"]
    states = list(MstateDF.index)
    counts = list(MstateDF.values)

    return jsonify({"January": JstateDF.to_dict(orient = "list"), "February": FstateDF.to_dict(orient = "list"), "March": MstateDF.to_dict(orient = "list")})

if __name__ == "__main__":
    app.run(debug=True)
