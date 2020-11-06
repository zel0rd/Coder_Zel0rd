import copy

key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]]	
lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]	

# lock = [[1, 1, 1],[1, 1, 1],[1, 1, 1]]	

print(key,lock)

def retate(key):
    n = len(key)
    m = len(key[0])

    # result = [[0] * n for _ in range(m)]
    # result = key.deepcopy()
    result = copy.deepcopy(key)
    # show(result)
    for i in range(n):
        for j in range(m):
            result[i][j] = key[m-j-1][i]
            # print(m-j-1,i)
    # show(result)
    return result



def show(matrix):
    for i in range(len(matrix)):
        print(matrix[i])

def new_lock(key, lock):
    key_size = len(key)
    lock_size = len(lock)

    new_size = key_size + lock_size + key_size

    new_lock = [[0] * new_size for _ in range(new_size)]
    # show(new_lock)
    # print("-----")
    for i in range(lock_size):
        for j in range(lock_size):
            new_lock[key_size + i][key_size+j] = lock[i][j]

    return new_lock
    show(new_lock)

def try_key(lock,key):
    for i in range(len(lock) - len(key)):
        for j in range(len(lock) -  len(key)):
            temp_lock = copy.deepcopy(lock)

            print(i,":",j)


def is_complete(new_lock,key):
    for i in range(len(key)):
        for j in range(len(key)):
            print(new_lock[len(key) + i][len(key)+j] )
            if new_lock[len(key) + i][len(key)+j] == 0:
                return False
    return True


# show(key)
# key = retate(key)
# show(key)
# lock = new_lock(key,lock)
# print(is_complete(lock,key))
# show(lock)


def solution(key,lock):
    lock = new_lock(key,lock)
    show(lock)
    try_key(lock,key)

solution(key,lock)