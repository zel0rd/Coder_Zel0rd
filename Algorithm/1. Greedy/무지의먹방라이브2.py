def get_min(food_times):
    temp = []
    
    for i in food_times:
        if i > 0:
            temp.append(i)
            
    return temp



def sub_min(food_times, k):
    # food_times에서 0이 아닌 값들
    food_counts = []
    for i in range(len(food_times)):
        if food_times[i]:
            food_counts.append(food_times[i])
    
    k -= min(food_counts) * len(food_counts)
    
    for i in range(len(food_times)):
        if food_times[i]:
            food_times[i] -= min(food_counts)
    
    return food_times, k
    

def solution(food_times, k):
    answer = 0
    
    
    # food_times가 k보다 작을 경우
    if sum(food_times) <= k:
        return -1
    # print(min(get_min(food_times)) * len(get_min(food_times)))
    while min(get_min(food_times)) * len(get_min(food_times)) <= k:
        food_times, k = sub_min(food_times,k)
        # print(food_times, k)
        
    tic = 0
    while True:
        if food_times[tic % len(food_times)] > 0:
            if k == 0:
                # print(tic % len(food_times) + 1)
                return tic % len(food_times) + 1
            else:
                food_times[tic % len(food_times)] -= 1
                k -= 1
        tic += 1
            
#     return 0

# 2 0 1 1
