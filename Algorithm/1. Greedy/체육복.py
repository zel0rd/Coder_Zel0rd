# 체육복 
# https://programmers.co.kr/learn/courses/30/lessons/42862

def solution(n, lost, reserve):
    answer = 0
    for i in lost:
        if i-1 in reserve:
            answer += 1
            reserve.remove(i-1)

        elif i+1 in reserve:
            answer +=1
            reserve.remove(i+1)
            
    for i in range(1, n+1):
        if i not in lost:
            answer += 1
        else:
            if i in reserve:
                answer += 1
                reserve.remove(i)
                lost.remove(i)
    print(answer)
    return answer

solution(5,	[2, 4],	[1, 3, 5])  # return 5
solution(5, [2, 4], [3])        # return 4
solution(3, [3], [1])           # return 2