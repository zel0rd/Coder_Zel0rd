# https://programmers.co.kr/learn/courses/30/lessons/60057

def solution(s):
    result = []
    for i in range(1, (len(s)+1) // 2 + 1):
        result.append(len(compile(s,i)))
        
    print(min(result))
    return min(result)
        
        

def compile(s, length):
    split = []

    for i in range( 0 , len(s), length):
        split.append(s[i:i+length])

    # prior 첫번째 부분 선언
    count = 1
    compressed = ''
    prior = split[0]

    # 압축하기
    for i in range(1, len(split)):
        if prior == split[i]:
            count += 1
        else:
            if count == 1:
                compressed += prior
                prior = split[i]
                count = 1
            else:
                compressed += str(count)+prior
                prior = split[i]
                count = 1
                
    # 마지막 부분
    if count == 1:
        compressed += prior
    else:
        compressed += str(count)+prior

    return compressed

solution("aabbaccc")
solution("ababcdcdababcdcd")
solution("abcabcdede")
solution("abcabcabcabcdededededede")
solution("xababcdcdababcdcd")
