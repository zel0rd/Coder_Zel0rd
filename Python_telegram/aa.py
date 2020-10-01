def score_to_string(score):
    if score < 50:
        return 3
    elif score < 80:
        return 2
    else:
        return 1

x = {1:'best', 2:'good', 3:'soso'}

print(x[score_to_string(60)])

# print(x[1])