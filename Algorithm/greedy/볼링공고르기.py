import time
ts = time.time()

# N, K = map(int, input().split())
# balls = list(map(int, input().split()))

N, K = 10, 5
balls = [1,4,3,2,4,1,3,4,3,1]

# print(N,K)
# print(balls)

count = 0

for i in range(len(balls)):
    for j in range(i+1, len(balls)):
        if balls[i] != balls[j]:
            count += 1

print(count)
print(time.time()-ts)