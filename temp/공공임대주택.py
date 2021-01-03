# https://data.myhome.go.kr/rentalHouseList?serviceKey=ZfVGPgxKmjZ1wBCvUsS10mjKkay5vX1PhMSBbqOsarGw33eJeE%2BrMOtRtmtTmV4eJGI0n%2BlYIqrxK5VKJrdwEg%3D%3D
# &brtcCode=11&signguCode=140&numOfRows=10&pageNo=1
url = 'https://data.myhome.go.kr/rentalHouseList?'
serviceKey = 'ZfVGPgxKmjZ1wBCvUsS10mjKkay5vX1PhMSBbqOsarGw33eJeE%2BrMOtRtmtTmV4eJGI0n%2BlYIqrxK5VKJrdwEg%3D%3D&'
brtcCode = '11'
signguCode = [110,140,170,200,215,230,260,290,305,320,350,380,410,440,470,500,530,545,560,590,620,650,680,710,740]
signguName = ['서울특별시 종로구',
'서울특별시 중구',
'서울특별시 용산구',
'서울특별시 성동구',
'서울특별시 광진구',
'서울특별시 동대문구',
'서울특별시 중랑구',
'서울특별시 성북구',
'서울특별시 강북구',
'서울특별시 도봉구',
'서울특별시 노원구',
'서울특별시 은평구',
'서울특별시 서대문구',
'서울특별시 마포구',
'서울특별시 양천구',
'서울특별시 강서구',
'서울특별시 구로구',
'서울특별시 금천구',
'서울특별시 영등포구',
'서울특별시 동작구',
'서울특별시 관악구',
'서울특별시 서초구',
'서울특별시 강남구',
'서울특별시 송파구',
'서울특별시 강동구']
numOfRows = 10
# pageNo = 1

r_hsmpSn = []
r_insttNm = []
r_brtcCode = []
r_brtcNm = []
r_signguCode = []
r_signguNm = []
r_hsmpNm = []
r_rnAdres = []
r_pnu = []
r_competDe = []
r_hshldCo = []
r_suplyTyNm = []
r_styleNm = []
r_suplyPrvuseAr = []
r_suplyCmnuseAr = []
r_houseTyNm = []
r_heatMthdDetailNm = []
r_buldStleNm = []
r_elvtrInstlAtNm = []
r_parkngCo = []
r_bassRentGtn = []
r_bassMtRntchrg = []
r_bassCnvrsGtnLmt = []


for signgu in signguCode:
    api_url = url+"serviceKey="+serviceKey+"&brtcCode="+brtcCode+"&signguCode="+str(signgu)+"&numOfRows=10"+"&pageNo=1"
    print(api_url)
    req = requests.get(api_url)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')

    current_signguName = signguName[signguCode.index(signgu)]
    print(current_signguName)
    json_data = json.loads(soup.text)
    total_count = json_data['hsmpList'][0]['totalCount']
    pageNo = list(range(1,(total_count // 10)+2))
    for page in pageNo:
        print(page)
        api_url = url+"serviceKey="+serviceKey+"&brtcCode="+brtcCode+"&signguCode="+str(signgu)+"&numOfRows=10"+"&pageNo=" + str(page)

        json_data = json.loads(soup.text)
        
        for data in json_data['hsmpList']:
            r_hsmpSn.append(data['hsmpSn'])
            r_insttNm.append(data['insttNm'])
            r_brtcCode.append(data['brtcCode'])
            r_brtcNm.append(data['brtcNm'])
            r_signguCode.append(data['signguCode'])
            r_signguNm.append(data['signguNm'])
            r_hsmpNm.append(data['hsmpNm'])
            r_rnAdres.append(data['rnAdres'])
            r_pnu.append(data['pnu'])
            r_competDe.append(data['competDe'])
            r_hshldCo.append(data['hshldCo'])
            r_suplyTyNm.append(data['suplyTyNm'])
            r_styleNm.append(data['styleNm'])
            r_suplyPrvuseAr.append(data['suplyPrvuseAr'])
            r_suplyCmnuseAr.append(data['suplyCmnuseAr'])
            r_houseTyNm.append(data['houseTyNm'])
            r_heatMthdDetailNm.append(data['heatMthdDetailNm'])
            r_buldStleNm.append(data['buldStleNm'])
            r_elvtrInstlAtNm.append(data['elvtrInstlAtNm'])
            r_parkngCo.append(data['parkngCo'])
            r_bassRentGtn.append(data['bassRentGtn'])
            r_bassMtRntchrg.append(data['bassMtRntchrg'])
            r_bassCnvrsGtnLmt.append(data['bassCnvrsGtnLmt'])
            
            
col = ['단지식별자','기관명', '광역시도코드', '광역시도명', '시군구코드','시군구이름','단지명','도로명주소', 'pnu','준공일자','세대수','공급유형명','형명','공급전용면적','공급공용면적','주택유형명','난방방식','건물형태','승강기설치여부','주차수','기본임대보증금','기본월임대료','기본전환보증금']

df = pd.DataFrame(list(zip(r_hsmpSn,r_insttNm,r_brtcCode,r_brtcNm,r_signguCode,r_signguNm,r_hsmpNm,r_rnAdres,r_pnu,r_competDe,r_hshldCo,r_suplyTyNm,r_styleNm,r_suplyPrvuseAr,r_suplyCmnuseAr,r_houseTyNm,r_heatMthdDetailNm,r_buldStleNm,r_elvtrInstlAtNm,r_parkngCo,r_bassRentGtn,r_bassMtRntchrg,r_bassCnvrsGtnLmt)), columns=col)
df.to_csv('공공임대주택정보.csv',index=False,encoding='euc-kr')