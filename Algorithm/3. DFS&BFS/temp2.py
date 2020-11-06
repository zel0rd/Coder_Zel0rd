def DFS(array,index):

    if index == 0 or index == 10:
        return False

    if array[index] == 0:
        array[index]=1
        DFS(array,index-1)
    elif array[index] == 1:
        DFS(array,index-1)


arr1 = [1,1,1,1,0,0,0,]

DFS(arr1,4)
print(arr1)