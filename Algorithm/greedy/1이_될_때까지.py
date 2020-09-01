# 어떤 수 N, K을 입력받아 N이 1이 될 때까지, 다음 두 과정 중 하나를 선택하여 수행

# 1. N에서 1을 뺀다.
# 2. N을 K로 나눈다.

# ex) [입력] 17 4 [1시행] 16 [2시행] 4 [2시행] 1 [result] 3

def run(N,K):
    if N % K == 0:
        return N // K
    else:
        return N-1

N, K = map(int, input().split())

count = 0

while True:
    if N == 1:
        break
    N = run(N,K)
    count += 1

print(count)