# N x M 크기의 얼음 틀이 있다. 구멍이 뚫려있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시
# 구멍이 뚫려있는 부분낄 상,하,좌,우로 붙어있는 경우 서로 연결되어 있는 것으로 간주
# 생성되는 총 아이스크림의 개수를 구하는 프로그램을 작성하라

# 예시)
# 00110
# 00011
# 11111
# 00000  => 총 3개 생성

def printer(graph):
    print("\n\n###############")
    for i in range(len(graph)):
        print(graph[i])
    print("###############\n\n")

def dfs(x,y):
    if x <= -1 or x >= n or y <= -1 or y >= m:
        return False
    if graph[x][y] == 0:
        graph[x][y] = 1
        dfs(x - 1, y)
        dfs(x, y - 1)
        dfs(x + 1, y)
        dfs(x, y + 1)
        return True
    
    printer(graph)
    return False

n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input())))

printer(graph)
result = 0
for i in range(n):
    for j in range(m):
        if dfs(i,j) == True:
            print(i,j)
            result += 1

print(result)
