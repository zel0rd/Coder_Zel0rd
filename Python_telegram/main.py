# pip install python-telegram-bot
# pip install request
# pip install bs4
# pip install fake-useragent
import requests
import telegram
import urllib.request
from bs4 import BeautifulSoup
from fake_useragent import UserAgent


def send_message_to_user(text):
    updates = bot.getUpdates()
    chat_id = updates[-1].message.chat_id
    bot.sendMessage(chat_id = chat_id, text=text)
    # for update in updates:
    #     print(update.message)
        

bot = telegram.Bot(token=TELEGRAM_TOKEN)
# send_message_to_user("AA")

ipark_url = "https://m.cafe.naver.com/dongtanpm"
# ua = UserAgent()
headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'}

req = requests.get(ipark_url,headers=headers)
# html = req.text
soup = BeautifulSoup(req.text, 'html.parser')
print(soup)
# title = soup.select("div")
# print(title)


# url = "https://m.cafe.naver.com/dongtanpm"
# req = urllib.request.urlopen(url)
# res = req.read()

# soup = BeautifulSoup(res,'html.parser')
# print(soup)