# import requests
# from bs4 import BeautifulSoup


# USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'

# headers = {'User-Agent' : USER_AGENT}
# res = requests.get(url, headers=headers)
# print(res)
# soup = BeautifulSoup(res.content, 'html.parser')
# # print(soup)


# "#thema_wrapper > div > div > div > div > div.col-xs-12.col-md-9.at-col.at-main > div.view-wrap > section > article > div.panel.panel-default.view-head > div.div-head.border-black > h1"

import cloudscraper
scraper = cloudscraper.create_scraper()  # returns a CloudScraper instance

print(scraper.get(url))