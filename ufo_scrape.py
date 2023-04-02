import json

def scrape():
    with open(janData.json) as jan:
        janData = json.load(jan)

    with open(febData.json) as feb:
        febData = json.load(feb)

    with open(marData.json) as mar:
        marData = json.load(mar)

    jan_scraping_data = {
        "Date": janData["Date"],
        "City": janData["City"],
        "State": janData["State"],
        "County": janData["County"],
        "Shape": janData["Shape"],
        "Duration": janData["Duration"],
        "Summary": janData["Summary"],
        "Posted": janData["Posted"],
        "Images": janData["Images"]  
    }

    feb_scraping_data = {
        "Date": febData["Date"],
        "City": febData["City"],
        "State": febData["State"],
        "County": febData["County"],
        "Shape": febData["Shape"],
        "Duration": febData["Duration"],
        "Summary": febData["Summary"],
        "Posted": febData["Posted"],
        "Images": febData["Images"]  
    }

    mar_scraping_data = {
        "Date": marData["Date"],
        "City": marData["City"],
        "State": marData["State"],
        "County": marData["County"],
        "Shape": marData["Shape"],
        "Duration": marData["Duration"],
        "Summary": marData["Summary"],
        "Posted": marData["Posted"],
        "Images": marData["Images"]  
    }

    return jan_scraping_data, feb_scraping_data, mar_scraping_data