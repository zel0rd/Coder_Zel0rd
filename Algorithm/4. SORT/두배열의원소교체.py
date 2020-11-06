array_size, count = map(int, input().split(" "))
arr1 = input().split(" ")
arr2 = input().split(" ")

def change(arr1, arr2):
    arr1[arr1.index(min(arr1))] , arr2[arr2.index(max(arr2))] = arr2[arr2.index(max(arr2))], arr1[arr1.index(min(arr1))]
    return arr1, arr2

for i in range(count):
    arr1, arr2 = change(arr1,arr2)

print(sum(map(int, arr1)))
