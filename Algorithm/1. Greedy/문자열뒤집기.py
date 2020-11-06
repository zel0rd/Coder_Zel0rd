# https://www.acmicpc.net/problem/1439
input_data = list(map(int,input()))

recorder = [0,0]

flag = input_data[0]
if input_data[0] == 0:
    recorder[0] += 1
else:
    recorder[1] += 1

for i in range(1,len(input_data)):
    if input_data[i] == flag:
        pass
    else:
        flag = input_data[i]
        recorder[flag] += 1
        # recorder.append(input_data[i])

print(min(recorder))

# case1 : 0001100 / result : 1
# case2 : 0101010 / result : 3