# conda install pywin32
import win32com.client
tts = win32com.client.Dispatch("SAPI.SpVoice")
tts.Speak("해시코드는 답변 검색 기능이 필요합니다.")