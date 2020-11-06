score = list(input())

def solution(score):
    score_left = score[:int(len(score)/2)]
    score_right = score[int(len(score)/2):]
    score_left = list(map(int, score_left))
    score_right = list(map(int, score_right))
    if sum(score_left) == sum(score_right):
        print("LUCKY")
    else:
        print("READY")

solution(score)