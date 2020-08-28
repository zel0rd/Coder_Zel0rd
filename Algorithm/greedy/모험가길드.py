user = list(input().split())

user.sort(reverse=True)

group = 0
possible = 0
for i in range(len(user)):
    if user[i] != 0:
        for j in range(i,i+int(user[i])):
            try:
                user[j] = 0
            except:
                possible += 1
        group += 1
    else:
        pass

if possible > 0:
    print("Cant make group")
else:
    print("Can make {} groups".format(group))

# case1 : 2 3 1 2 2 / result 2
# case2 : 3 3 3 2 2 1 / result 3
# case3 : 7 1 1 / cant make groups