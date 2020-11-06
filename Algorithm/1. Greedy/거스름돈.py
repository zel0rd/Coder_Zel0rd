# 거스름 돈을 500원, 100원, 50원, 10원으로 줄 때, 가장 적은 동전의 갯수로 주는 알고리즘을 구현하라

coins = [500,100,50,10]
coin_cnt = []

while True:
    try:
        n = int(input("\n거스름 돈을 입력해주세요 : "))
        if(n % 10 == 0):
            print("거스름 돈은 {}원 입니다".format(n))
            break
        else:
            print("금액은 10원 단위로 입력해주세요.")
    except:
        print("숫자만 입력해주세요")
    

for coin in coins:
    coin_cnt.append(n // coin)
    n %= coin

result = dict(zip(coins,coin_cnt))
print('\n동전별 갯수 : ',result)
print('총 동전의 갯수 :  ',sum(coin_cnt))