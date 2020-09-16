
def factorial_iterative(n):
    result = 1
    # 1부터 n까지의 수를 차례대로 곱하기
    for i in range(1, n+1):
        result *= i
    return result

def factorial_recursive(n):
    if n <= 1:
        print("종료합니다")
        return 1
    print("{}이 호출되었습니다.".format(n))

    # n! = n * (n-1)!를 그대로 코드로 작성하기 
    return n * factorial_recursive(n-1)


print("반복적으로 구현:", factorial_iterative(5))
print("재귀적으로 구현:", factorial_recursive(5))

def adjacency_list():

    # 행(Row)이 3개인 2차원 리스트로 인접 리스트 표현
    graph = [[] for _ in range(3)]

    # 노드 0에 연결된 노드 정보 저장(노드, 거리)
    graph[0].append((1,7))
    graph[0].append((2,5))

    # 노드1에 연결된 노드 정보 저장(노드, 거리)
    graph[1].append((0,7))

    # 노드2에 연결된 노드 정보 저장(노드, 거리)
    graph[2].append((0,5))

    print(graph)

adjacency_list() 


# DFS 메서드 정의
def dfs(graph, v, visited):
    # 현재 노드를 방문 처리
    visited[v] = True
    print(v, end=' ')
    # 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

# 각 노드가 연결된 정보를 리스트 자료형으로 표현(2차원 리스트)
graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현(1차원 리스트)
visited = [False] * 9

print("\n\n DFS CODE \n\n")
# 정의된 DFS함수 호출
print("result : ", end='')
dfs(graph,1,visited)
print("\nexpected result :  1 2 7 6 8 3 4 5")


from collections import deque

    # BFS 메서드 정의
def bfs(graph, start, visited):
    # 큐(queue) 구현을 위해 deque라이브러리 사용
    queue = deque([start])
    # 현재 노드를 방문 처리
    visited[start] = True
    # 큐가 빌 때까지 반복
    while queue:
        # 큐에서 하나의 원소를 뽑아 출력
        v = queue.popleft()
        print(v, end=' ')
        # 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

# 각 노드가 연결된 정보를 리스트 자료형으로 표현(2차원 리스트)
graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현(1차원 리스트)
visited = [False] * 9

# 정의된 DFS함수 호출
print("\n\n BFS CODE \n\n")
# 정의된 DFS함수 호출
print("result : ", end='')
bfs(graph,1,visited)
print("\nexpected result :  1 2 3 8 7 4 5 6")