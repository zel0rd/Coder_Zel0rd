from gtts import gTTS
text ="Hi, everybody. Playing with Python is fun!!!"

tts = gTTS(text=text, lang='en')
tts.save("helloEN.mp3")


from gtts import gTTS
text ="안녕하세요, 여러분. 파이썬으로 노는 것은 재미있습니다!!!"

tts = gTTS(text=text, lang='ko')
tts.save("helloKO.mp3")


