def longest(str1, str2, str3):
    if (len(str1) > len(str2)):
        if (len(str1) > len(str3)):
            longest = str1
        else:
            longest = str3
    elif (len(str2) > len(str3)):
        longest = str2
    else:
        longest = str3
    print(longest)
    return longest

longest("one","second","thrid")
longest("second","one","thrid")
longest("one","thrid","second")