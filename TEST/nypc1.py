# solution1
# length = int(input())
# arr =  list(map(int,input().split()))

# # print(length)
# # print(arr)

# results = []
# for i in range(1,length+1):
#     for j in range(len(arr)-i+1):
#         # print(arr[j:j+i])
#         results.append(sum(arr[j:j+i]))

# print(max(results))

# solution2
# length = int(input())
# arr =  list(map(float,input().split()))

# summary = 0
# prefix_sum = [0]

# for i in arr:
#     summary += i
#     prefix_sum.append(summary)

# result = []
# for i in range(1,length+1):
#     for j in range(i,length+1):
#         # print(i,j, prefix_sum[j] - prefix_sum[i-1])
#         result.append(prefix_sum[j] - prefix_sum[i-1])

# answer = max(result)
# print(int(answer))

# solution3
def dynamic_programming(arr):
    cache = [None] * len(arr)
    # 1.
    cache[0] = arr[0]

    # 2.
    for i in range(1, len(arr)):
        cache[i] = max(0, cache[i-1]) + arr[i]

    return max(cache)

    
length = int(input())
arr =  list(map(int,input().split()))

print(dynamic_programming(arr))
