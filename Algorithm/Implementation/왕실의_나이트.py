# 문제
# 8 x 8 체스판에 특정한 한 칸에 나이트가 서있다.

# 나이트는 다음과 같이 움직일 수 있다.

# 1. 수평으로 두칸 이동한 뒤에 수직으로 한칸 이동
# 2. 수직으로 두칸 이동한 뒤에 수평으로 한칸 이동

# 열은 a,b,c,d,e,f,g,h
# 행은 1,2,3,4,5,6,7,8 로 구성되어 있다.

# 나이트가 c2에 위치해 있다면, 이동할 수 있는 경우의 수는 6가지 이다.
# 나이트가 a1에 위치해 있다면, 이동할 수 있는 경우의 수는 2가지 이다.

def trans_col(pos_col):
    return ord(pos_col) - 96

# 왼쪽 : -2 / +1,-1
# 오른쪽 :2 / +1,-1
# 위쪽 : +1,-1 / -2
# 아래쪽 : +1,-1 / 2

move_set = [[-2,1],[-2,-1],[2,1],[2,-1],[1,-2],[-1,-2],[1,2],[-1,2]]
input_data = input()
pos_col, pos_row = int(trans_col(input_data[0])), int(input_data[1])

count = 0
for move in move_set:
    # print(type(move[0]))
    x = pos_col + move[0]
    y = pos_row + move[1]
    if (0<x<9) and (0<y<9):
        count+=1
    
print(count)