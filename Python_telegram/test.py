import requests, time, telegram, re
from bs4 import BeautifulSoup
  
## requests와 BeautifulSoup으로 카페 게시글 목록을 불러오는 함수 ##
def bs(url, page):
    headers = { # 헤더를 넣지 않아도 작동하는 것을 확인했습니다.
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
    }
    params = {
        'search.clubid' : '18786605', # 카페 ID
        'search.menuid' : '741', # 메뉴 ID
        'search.boardtype' : 'L', # 보드타입 (반드시 필요로 하는 것은 아닌 것 같습니다.)
        'search.page' : page # 불러올 페이지
    }
    html = requests.get(url, headers = headers, params = params)
    soup = BeautifulSoup(html.text, 'html.parser')
    return soup
 
## 게시글 제목과 리플 수를 파싱하여 리플 수가 일정 이상인 경우만 추출하는 함수 ##
def parse(url):
    page = 0
    result_title = []
    result_reply = []
    while page <= 3: # 1~3페이지를 불러옵니다.
        soup = bs(url, page)
        titles = soup.select('strong.tit') # 게시글 제목
        for title in titles:
            result_title.append(' '.join(title.text.strip().split()))
        replys = soup.select('em.num') # 리플 수
        for reply in replys:
            result_reply.append(reply.text)
        page += 1
        time.sleep(0.5)
    count = 0
    final_list = []
    while count < len(result_title):
        if int(result_reply[count]) >= 70: # 리플이 70개가 넘는 글만 리스트에 담습니다.
            final_list.append(result_title[count] + ' (' + result_reply[count] + ')')
        count += 1
    return final_list
 
## 최종결과 문자열에서 리플 수를 제외하는 정규식 처리 ##
def regex(string):
    try: # 괄호 안 숫자가 두 글자인 경우
        if re.compile(r'.+(?<=\(\d{2}\))').search(string).end() > 0:
            result = string[:-5]
    except: # 괄호 안 숫자가 세 글자인 경우 (네 글자인 경우는 상정하지 않았습니다.)
        try:
            if re.compile(r'.+(?<=\(\d{3}\))').search(string).end() > 0:
                result = string[:-6]
        except:
            pass
    return result
 
## TXT 파일로 결과를 저장하고 텔레그램으로 새 글을 알리는 함수 ##
def telegram_bot(titles):
    bot = telegram.Bot(token='토큰을 입력하세요')
    try:
        chat_id = bot.getUpdates()[-1].message.chat.id
    except:
        chat_id = "aa"
    try:
        lines = [line.rstrip('\n') for line in open('ncafe.txt', 'r', encoding='utf8')]
    except: # 파일이 존재하지 않는 경우를 예외처리합니다. (처음 실행하는 경우 에러가 발생하기 때문입니다.)
        lines = ['no data']
    
    check = 0
    with open('ncafe.txt', 'w', encoding='utf8') as f: # TXT 파일을 업데이트합니다.
        for title in titles:
            for line in lines:
                if regex(title) == regex(line):
                    check = 1
            if check == 0: # 새 글만 텔레그램으로 알립니다.
                bot.sendMessage(chat_id=chat_id, text=title)
                print(title)
            f.write(title  + '\n')
 
if __name__ == '__main__':
    url="https://m.cafe.naver.com/dongtanpm"
    titles = parse(url)
    print(titles)
    # telegram_bot(titles)