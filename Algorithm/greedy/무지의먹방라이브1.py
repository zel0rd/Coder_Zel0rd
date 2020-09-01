# https://programmers.co.kr/learn/courses/30/lessons/42891
# 효율성 실패
def solution(food_times, k):
    pos = 0
    tic = 0
    food_counts = len(food_times)
    while k != pos:
        if food_times[tic%food_counts] > 0:
            food_times[tic%food_counts] -= 1
            pos += 1
        tic += 1
        if max(food_times) == 0:
            return -1
    #     print(food_times,pos)
    # print(food_times[tic%food_counts])
    # print(tic)
    
    for i in range(len(food_times)):
        if food_times[(tic+i)%food_counts] > 0 :
            return(tic+i) % food_counts + 1
    
    return -1
