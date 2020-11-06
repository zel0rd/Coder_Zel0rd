# facebook 인터뷰 문제
# 알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력
# 모든 알파벳을 오름차순으로 정렬하여 출력한 뒤, 그 뒤에 모든 숫자를 더한 값을 이어서 출력

# case1 K1KA5CB7 / result ABCKK13
# case2 AJKDLSI412K4JSJ9D / ADDIJJJKKLSS20

def solution(input_data):
    string = list(input_data)
    string.sort()
    alpha = []
    number = []
    for i in string:
        if i.isalpha():
            alpha.append(i)
        else:
            number.append(i)

    print( ''.join(alpha) + str(sum(list(map(int,number)))) )

solution('K1KA5CB7')
solution('AJKDLSI412K4JSJ9D')
# solution(input())