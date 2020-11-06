from itertools import combinations

def get_course_menus(orders, number):
    order_set = list(set(''.join(orders)))
    order_set.sort()
    # print(order_set)
    course_menus = [''.join(l) for i in range(number-1,number) for l in combinations(order_set, i+1)]
    return course_menus

def solution(orders, course):
    # answer = []
    # for i in course:
    #     # answer.append(get_course_menus(orders, i))
    #     print(get_course_menus(orders, i))
    #     course_menus = get_course_menus(orders, i)

    #     for j in course_menus:
    #         print(j)
    #         print(contain_checker(orders[0],j))
    #         # for k in orders:
    #         #     print(k)
    #         #     for l in k:

    #         # for k in j:
            #     print(k)
        
    answer = []
    for j in course:
        menus = get_course_menus(orders,j)
        course_menus ={}
        for menu in menus:
            count = 0
            course_menus[menu] = 0
            for order in orders:
                if contain_checker(order,menu):
                    course_menus[menu] += 1
                    
        print(course_menus)
        max_count = max(course_menus.values())
        for i in course_menus.keys():
            if course_menus[i] == max_count:
                answer.append(i)
    
    answer.sort()
    print(answer)
    return answer


def contain_checker(order, course_menus):
    count = 0
    for i in course_menus:
        print(i)
        if i in order:
            count += 1
    print(count)
    if count == len(course_menus):
        return True
    else:
        return False
    
    


orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
course = [2,3,4]
solution(orders, course)


# print(contain_checker("ACDEF","ADE"))
# get_course_menus(orders,3)