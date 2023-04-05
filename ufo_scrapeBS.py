# import necessary libraries
from bs4 import BeautifulSoup
from splinter import Browser
import pandas as pd
import time
from webdriver_manager.chrome import ChromeDriverManager

def scrape_info(url):
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=False)

#define URL to scrape
    # url = 'https://nuforc.org/webreports/ndxe202301.html'
    browser.visit(url)
    html = browser.html

    time.sleep(1)

    #create soup
    soup = BeautifulSoup(html,'html.parser')

    ufodata = []

    ufotable = soup.find_all("table")

    for table in ufotable:
        try:
            rows = table.find_all("tr")
            for row in rows:
                cells = row.find_all("td")
                if len(cells) == 9:
                    date = cells[0].text
                    city = cells[1].text
                    state = cells[2].text
                    country = cells[3].text
                    shape = cells[4].text
                    duration = cells[5].text
                    summary = cells[6].text
                    posted = cells[7].text
                    images = cells[8].text
                    dictionary ={'Date':date, 'City':city, 'State':state, 'Country':country, 'Shape':shape, 'Duration':duration, 'Summary':summary, 'Posted':posted, 'Images':images}
                    ufodata.append(dictionary)
        except Exception as error:
                print(error)

    browser.quit()

    return ufodata      


    