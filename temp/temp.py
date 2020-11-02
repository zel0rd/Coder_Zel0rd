# from random import randint

# def dice():
#     roll_a = randint(1, 6)
#     roll_b = randint(1, 6)
#     roll_sum = roll_a + roll_b
#     print("Player rolled {} + {} = {}".format(roll_a, roll_b, roll_sum))
#     return roll_sum

# i = dice()
# if (i == 7) or (i == 11):
#     print("Win")
# elif (i == 2) or (i == 3) or (i == 12):
#     print("Craps")
# else:
#     print("Your Point is", i)

#     from random import randint

# for i in range(1, 6):
#     for j in range(1, i+1):
#         print(j, end="")
#     print()
# 코드를 while 문으로 바꿔야합니다. 저는
i = 1
while True:
    a = list(range(1, i+1))
    while len(a):
        print(a[0],end="")
        del a[0]
    print()
    i += 1
    if i > 5: break
