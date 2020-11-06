# https://www.acmicpc.net/problem/10825
count = int(input())

students = []

for i in range(count):
    temp_input = input().split(" ")
    name = temp_input[0]
    temp_input[1:] = list(map(int, temp_input[1:]))
    score1, score2, score3 = temp_input[1],temp_input[2],temp_input[3]
    
    temp_dict = {'name':name, 'score1':score1,'score2':score2,'score3':score3}
    students.append(temp_dict)

sorted_students = sorted(students, key=lambda e:(-e['score1'],e['score2'],-e['score3'],e['name']))

for i in sorted_students:
    print(i['name'])
# 국어 점수는 감소하는 순 (내림차순)
# 영어 점수는 증가하는 순 (오름차순)
# 수학 점수는 감소하는 순 (내림차순)
# 이름은 오름차순


# solution
# n = int(input())
# students = []
# for _ in range(n):
#     students.append(input().split())

# students.sort(key =lambda x: (-int(x[1]), int(x[2]), -int(x[3]), x[0]))

# for student in students:
#     print(student[0])