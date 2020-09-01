import time
ts = time.time()
# n,m = map(int, input().split())

# data = list(map(int, input().split()))

n, m = 10, 5
data = [1,4,3,2,4,1,3,4,3,1]

array = [0] * 11

for x in data:
    array[x] += 1
# print(array)

result = 0
for i in range(1, m+1):
    n = n - array[i]
    result += array[i] * n
    # print(n, array[i],result)
print(result)
print(time.time()-ts)