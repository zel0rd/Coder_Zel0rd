def solution(food_times, k):
    food_dic = dict(zip(range(len(food_times)), food_times))
    print(food_dic)

    print(food_dic.keys())
    print(food_dic.values())


solution([3,1,2],5) 
