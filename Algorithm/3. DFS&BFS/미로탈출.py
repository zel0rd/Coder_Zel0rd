def printer(graph):
    print("\n\n###############")
    for i in range(len(graph)):
        print(graph[i])
    print("###############\n\n")

def dfs(x,y):
    if x <= -1 or x >= n or y <= -1 or y >= m:
        return False
    if graph[x][y] != 0:

# n, m = map(int, input().split())

# graph = []
# for i in range(n):
#     graph.append(list(map(int, input())))
n, m = 3, 3
graph = [
    [1,1,0],
    [0,1,0],
    [0,1,1]
]


printer(graph)
result = 0

