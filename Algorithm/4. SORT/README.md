# 정렬

- 데이터를 특정한 기준에 따라 순서대로 나열하는 것

| 데이터의 개수(N) | 선택 정렬 | 퀵 정렬 | 기본 정렬 라이브러리 |
| --- | --- | --- | --- |
| N = 100 | 0.0123초 | 0.00156초 | 0.00000753초 |
| N = 1000 | 0.354초 | 0.00343초 | 0.0000365초  |
| N = 10000 | 15.475초 | 0.0312초 | 0.000248초  |

## 선택정렬
> 데이터가 무작위로 여러 개 있을 때, 이 중에서 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸고, 다음 작은 데이터를 선택해 앞에서 두번째 데이터와 바꾸는 과정을 반복

### 6-1.py 선택정렬 소스코드

    array = [7,5,9,0,3,1,6,2,4,8]

    for i in range(len(array)):
        min_index = i
        for j in range(i+1, len(array)):
            if array[min_index] >  array[j]:
                min_index = j
        array[i], array[min_index] = array[min_index], array[i]

    print(array)

### 선택정렬의 시간복잡도
> 이렇게 구현했을 때 연산 횟수는 N + (N-1) + (N-2) + ... + 2로 볼 수 있음  
> 따라서 근사치로 N x (N+1) / 2 의 연산을 수행  
> 빅오로 표기하면 O(N제곱). 즉 2중 반복문과 같음

## 삽입정렬
> '데이터를 하나씩 확인하며, 적절한 위치에 삽입'  
> 특히 삽입 정렬은 필요할 때만 위치를 바꾸므로 '데이터가 거의 정렬되어 있을 때' 훨씬 효율적  


### 6-3.py 삽입 정렬 소스코드

    array = [7,5,9,0,3,1,6,2,4,8]

    for i in range(1, len(array)):
        for j in range(i, 0, -1):
            if array[j] < array[j-1]:
                array[j], array[j-1] = array[j-1], array[j]
            else:
                break

    print(array)

> 삽입 정렬의 시간 복잡도는 O(N제곱)  
> 최선의 경우 O(N)의 시간 복잡도를 가짐  
> 정렬이 거의 안되어있는 경우 : 퀵소트가 빠름  
> 정렬이 거의 되어있는 경우 : 삽입정렬이 빠름  


## 퀵 정렬
> 퀵 정렬만큼 빠른 '병합정렬'도 빠름  
> 첫 번째 인덱스 값을 피벗으로 하고, 왼쪽에는 피벗보다 작은 값, 오른쪽에는 큰 값으로 분류 (파티션)
> 분할 이후 왼쪽 부분과 오른쪽 부분에서 각자 정렬수행

### 6-4.py 퀵 정렬 소스코드

    array = [5,7,9,0,3,1,6,2,4,8]

    def quick_sort(array, start, end):
        if start >= end:
            return
        pivot = start
        left = start + 1
        right = end
        while left <= right:
            # 피벗보다 큰 데이터를 찾을 때까지 반복
            while left <= end and array[left <= array[pivot]:
                left += 1
            # 피벗보다 작은 데이터를 찾을 때까지 반복
            while right > start and array[right] >= array[pivot]:
                right -= 1
            if left > right: #엇갈렸다면 작은 right -= 1 데이터와 피벗을 교체
                array[right], array[pivot] = array[pivot], array[right]
            else: # 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
                array[left], array[right] = array[right],array[left]
        
        #분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
        quick_sort(array, start,right-1)
        quick_sort(array, right + 1, end)

    quick_sort(array, 0, len(array)-1)
    print(array)

### 6-5.py 파이썬의 장점을 살린 퀵 정렬 소스코드

    array = [5,7,9,0,3,1,6,2,4,8]

    def quick_soprt(array):
    # 리스트가 하나 이하의 원소만을 담고 있다면 종료
        if len(array) <= 1:
            return array
            
        pivot = array[0] # 피벗은 첫번째 원소
        tail = array[1:] # 피벗을 제외한 리스트

        left_side = [x for x in tail if x<= pivot] # 분할된 왼쪽부분
        right_side = [x for x in tail if x > pivot] # 분할된 오른쪽 부분

        # 분할 이후 왼쪽 부붕과 오른쪽 부분에서 각각 정렬을 수행하고, 전체 리스트를 반환
        return quick_sort(left_side) + [pivot] + quick_sort(right)
    
    print(quick_sort(array))


### 퀵 정렬의 시간 복잡도
> 퀵 정렬의 시간 복잡도는 O(NlogN), 최악의 경우 O(N제곱)  
> 데이터가 무작위로 입력될 때는 빠르지만, '이미 데이터가 정렬되어 있는 경우'에는 매우 느림  

## 계수 정렬
- 특정한 조건이 부합할 때만 사용할 수 있지만 매우 빠른 정렬알고리즘


> 모든 데이터가 양의 정수인 상황을 가정할 때, 데이터의 개수가 N, 최대값이 K일때, 최악의 경우에도 수행시간 O(N+K)을 보장  
> 다만 '데이터의 크기 범위가 제한되어 정수형태로 표현할 수 있을 때'만 사용가능  
> 이러한 특징을 가지는 이유는 '모든 범위를 담을 수 있는 크기의 리스트를 선언'해야하기 때문  
> 비교기반의 정렬알고리즘이 아님(직접 데이터의 값을 비교한 뒤 위치를 변경하는 정렬)  

### 6-6.py 계수 정렬 소스코드

### 계수 정렬의 시간복잡도

## 파이썬의 정렬 라이브러리

