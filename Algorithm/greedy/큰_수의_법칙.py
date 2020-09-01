# n, m, k 입력을 받을 때,
# 다양한 수로 이루어진 배열이 있을 때, 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙
# 단, 배열의 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없음
# n은 배열안의 요소의 갯수

# 예시1
# 입력
# 5 8 3
# 2 4 5 4 6
# 출력
# 46

# 예시2
# 입력
# 5 7 2 
# 3 4 3 4 3 
# 출력 
# 28

n, m, k = map(int, input().split())
data = list(map(int, input().split()))

data.sort()

first = data[n-1]
second = data[n-2]

result = 0

while True:
    for i in range(k):
        if m == 0:
            break
        result += first
        m -= 1
    
    if m == 0:
        break

    result += second
    m -= 1

print(result)