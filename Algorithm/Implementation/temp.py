def solution(s):
    count = 1
    
    while count:
        count = 0
        # print(s)
        s = list(s)
        prior = s[0]
        for i in range(1,len(s)):
            if prior == s[i]:
                s = str(s[:i-1]) + str(s[i+1:])
                print(s)
                count += 1
                break 
        
    print(s)
    if len(s) == 0:
        return 1
    else:
        return 0
            
solution('baabaa')
solution('cdcd')