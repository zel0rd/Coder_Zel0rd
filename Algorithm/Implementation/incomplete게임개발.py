# 1. 현재 위치에서 현재 방향을 기준으로 왼쪽방향(반시계방향으로 90도 회전한 방향)부터 차례대로 갈 곳을 정한다.
# 2. 캐릭터의 바로 왼쪽 방향에 아직 가보지 않은 칸이 존재한다면, 왼쪽방향으로 회전한 다음 왼쪽으로 한 칸을 전진한다.
# 3. 만약 네 방향 모두 이미 가본 칸이거나 바다로 되어 있는 칸인 경우에는, 바라보는 방향을 유지한 채로 한칸 뒤로 가고 1단계로 돌아간다. 단, 이때 뒤쪽 방향이 바다인 칸이라 뒤로 갈수 없는 경우에는 움직임을 멈춘다. 

# 입력
# 4 4       맵 크기
# 1 1 0     캐릭터 위치, 방향
# 1 1 1 1   첫줄
# 1 0 0 1   두째줄
# 1 1 0 1   셋쨰줄
# 1 1 1 1   넷째줄
# map(int, input().split())

# get input
# MAP_SIZE = list(map(int, input().split()))
# CHARCTER_INFO = list(map(int, input().split()))
# CHA_POS, CHA_DIR = CHARCTER_INFO[0:2],CHARCTER_INFO[2]
# MAP = []
# for i in range(MAP_SIZE[1]):
#     MAP.append(list(map(int, input().split())))

COUNT = 0

# temp input
MAP_SIZE = [4,4]
CHA_POS, CHA_DIR = [1,1],0
MAP = [
    [1,1,1,1],
    [1,0,0,1],
    [1,1,0,1],
    [1,1,1,1,]
    ]


def print_map(MAP):
    for i in range(len(MAP)):
        print(MAP[i])
        
def print_status(MAP_SIZE, CHA_POS, CHA_DIR, MAP):
    print("#######################\n")
    print("MAP_SIZE : ", MAP_SIZE)
    print("CHA_POS & CHA_DIR : ", CHA_POS, CHA_DIR)
    print_map(MAP)
    print("\n#######################")

def dir_checker(MAP_SIZE, CHA_POS, CHA_DIR, MAP):
    x = CHA_POS[0]
    y = CHA_POS[1]
    north = MAP[x - 1  ][ y]
    west =  MAP[x      ][ y - 1]
    south = MAP[x + 1  ][ y]
    east =  MAP[x      ][ y + 1]

    
    if x == 0 :
        north = -1
    if y == 0:
        west = -1
    if x == MAP_SIZE[0] - 1:
        south = -1
    if y == MAP_SIZE[1] - 1:
        east = -1        
    
    my_path = [north, west, south, east]

    print(my_path)

def move(my_path,CHA_POS, CHA_DIR, MAP, COUNT):
    x = CHA_POS[0]
    y = CHA_POS[1]
    for i in range(4):
        direction = (CHA_DIR + i) % 4
        print(direction)
        # if my_path[direction] == 0:
        #     if MAP[x][y] == 0:
        #         MAP[x][y] = 2
        #         COUNT += 1

        #     if direction == 0:
        #         x -= 1
        #         COUNT += 1
        #     elif direction == 1:
        #         y -= 1
        #         COUNT += 1
        #     elif direction == 2:
        #         x += 1
        #         COUNT += 1
        #     elif direction == 3:
        #         y += 1
        #         COUNT += 1
            
        #     CHA_POS[0] = x
        #     CHA_POS[1] = y
        #     return [CHA_POS, direction, MAP, COUNT)
        

print_status(MAP_SIZE, CHA_POS, CHA_DIR, MAP)
my_path = dir_checker(MAP_SIZE, CHA_POS, CHA_DIR, MAP)
CHA_POS, CHA_DIR, MAP, COUNT = move(my_path,CHA_POS, CHA_DIR, MAP, COUNT)

print_status(MAP_SIZE, CHA_POS, CHA_DIR, MAP)