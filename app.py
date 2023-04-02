# Imports
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from pymongo import MongoClient
import ufo_scrape   

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/aliens_db"
mongo = PyMongo(app)

client = MongoClient("localhost", 27017)
db = client["aliens_db"]
collection = db["aliens"] 

# Root route
@app.route("/")
def index():
    # find one document from the mongo db and return it.
    aliens = mongo.db.aliens.find_one()
    # pass that listing to render_template
    return render_template("index.html", aliens=aliens)

# Run Scrape function
@app.route("/scrape")
def scraper():
    # create an aliens database
    aliens = mongo.db.aliens
    # call the scrape function. This will scrape and save to mongo.
    aliens_data = ufo_scrape.scrape()
    # update the data with the data that is being scraped.
    aliens.replace_one({}, aliens_data, upsert=True)
    # return a message to the page so we know it was successful.
    return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)