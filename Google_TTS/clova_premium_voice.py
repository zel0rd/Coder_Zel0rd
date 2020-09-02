# // 네이버 음성합성 Open API 예제
import os
import sys
import urllib.request
client_id = "fvmxmpwfbh"
client_secret = "cQvosGBbWje1B6SpcBz2gnlZwfxnMFa7OsozqZUJ"
encText = urllib.parse.quote("안녕 사랑하는 은시라 나 영길이야 좋은 밤 되렴!!")
data = "speaker=nara&volume=0&speed=0&pitch=0&emotion=0&format=mp3&text=" + encText;
url = "https://naveropenapi.apigw.ntruss.com/voice-premium/v1/tts"
# url = "https://naveropenapi.apigw.ntruss.com/voice/v1/tts"
request = urllib.request.Request(url)
request.add_header("X-NCP-APIGW-API-KEY-ID",client_id)
request.add_header("X-NCP-APIGW-API-KEY",client_secret)
response = urllib.request.urlopen(request, data=data.encode('utf-8'))
rescode = response.getcode()
if(rescode==200):
    print("TTS mp3 저장")
    response_body = response.read()
    with open('1111.mp3', 'wb') as f:
        f.write(response_body)
else:
    print("Error Code:" + rescode)


