import os
import sys
import urllib
import urllib2
reload(sys)
sys.setdefaultencoding('utf-8')
client_id = "fvmxmpwfbh"
client_secret = "cQvosGBbWje1B6SpcBz2gnlZwfxnMFa7OsozqZUJ"
text = "반갑습니다 네이버" # 음성 합성할 문장
speaker = "mijin" # 음성 합성에 사용할 목소리 종류
speed = "0" # 음성 재생 속도
val = {
    "speaker": speaker,
    "speed":speed,
    "text":text
}
data = urllib.urlencode(val)
url = "https://naveropenapi.apigw.ntruss.com/voice/v1/tts"
headers = {
    "X-NCP-APIGW-API-KEY-ID" : client_id,
    "X-NCP-APIGW-API-KEY" : client_secret
}
request = urllib2.Request(url, data, headers)
response = urllib2.urlopen(request)
rescode = response.getcode()
if(rescode==200):
    print("TTS mp3 save")
    response_body = response.read()
    with open('1111.mp3', 'wb') as f:
        f.write(response_body)
else:
    print("Error Code:" + rescode)