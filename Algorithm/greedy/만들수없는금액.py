N = int(input())
coins = list(map(int,input().split()))
coins.sort()
print(coins)
target = 1
for x in coins:

    if target < x:
        break
    target += x
    print(x, target)
print(target)