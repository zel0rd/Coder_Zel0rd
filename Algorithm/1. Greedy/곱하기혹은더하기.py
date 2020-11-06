num_string = list(map(int,input()))

cal_result = num_string[0]

for i in range(1,len(num_string)):
    if (num_string[i] == 0) or (num_string[i] == 1) or (cal_result == 0) or (cal_result == 1):
        cal_result += num_string[i] + cal_result
        print("+")
        print(cal_result)
    else:
        cal_result = num_string[i] * cal_result
        print("*")
        print(cal_result)

print("result : {}".format(cal_result))

# case1 : 02984 / result : 576
# case2 : 567 / result : 210