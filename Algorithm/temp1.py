num1 = float(input("첫번째 숫자를 입력하세요 : ")) # 첫번째 숫자를 입력받음
num2 = float(input("두번째 숫자를 입력하세요 : ")) # 두번째 숫자를 입력받음
num3 = float(input("세번째 숫자를 입력하세요 : ")) # 세번째 숫자를 입력받음

avg = (num1 + num2 + num3) / 3 # 평균은 세 수를 모두 더한다음 3으로 나누면 됨

if (avg >= 50) and (avg < 100):  # 조건에서 50이상 100미만이라고 했기 때문에 다음과 같이 작성
    print("True") 
else:
    print("False")