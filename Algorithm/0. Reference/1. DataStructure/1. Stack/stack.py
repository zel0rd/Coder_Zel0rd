class Stack:
    def __init__(self):
        self.top = []
    def push(self, item):
        self.top.append(item)
    def pop(self):
        if not self.isEmpty():
            return self.top.pop(-1)
        else:
            print("underflow")
    def isEmpty(self):
        return len(self.top) == 0
    def print(self):
        return self.top

input_data = open('input.txt','r', encoding="UTF8")

test_case = int(input_data.readline())
for i in range(test_case):
    stack = Stack()
    data_size = int(input_data.readline())
    data = list(map(int, input_data.readline().split(" ")))
    
    print("테스트 케이스 : ", i+1)
    
    # stack push
    for i in data:
        stack.push(i)
    print("스택 PUSH 출력 : ", stack.print())

    # stack pop
    print("스택 POP 출력 : ", end=" ")
    for i in range(len(data)):
        print(stack.pop(), end= " ")
    print()