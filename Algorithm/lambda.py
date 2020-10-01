# lambda 함수

sum = lambda a,b : a+b
print(sum(3,4))

# map 함수
li = [1,2,3]
result = map(lambda i: i**2, li)
print(result)
print(list(result))

# 3항 연산자
## if else
def func(a):
    if a > 10:
        return 'a가 10보다 크다'
    else:
        return 'a가 10보다 작다'

def func2(a):
    return 'a가 10보다 크다' if a > 10 else 'a가 10보다 작다'
    return 'a가 10보다 크다' if a > 10 else 'a가 10보다 작다'

print(func(10))
print(func2(10))

# filter 함수

li = [-2,-3,5,6]

def ft(li):
    result = []
    for e in li:
        if e > 0:
            result.append(e)
        else:
            pass
    return result

def postivie(x):
    return x>0

print(ft(li))
print(filter(postivie, li))
print(list(filter(postivie, li)))

# reduce 함수
from functools import reduce
print(reduce(lambda x, y: x+y, [1,2,3,4,5]))

def maxium(li):
    default = 0
    for e in li:
        if default < e:
            default = e
    return default
print(maxium(li))
print(reduce(lambda a,b: a if a > b else b , li))