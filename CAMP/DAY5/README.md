# CAMP DAY5

## 객체지향 설계와 프로그래밍

### class
- field와 method가 종합적으로 묶여있는 것
- class를 이용하여 상속과 다향성이 존재

    class person{
        name;   # field (속성)
        age;    # field (속성)
        speak() # method (행동)
    }

class : 붕어빵을 만들 수 있는 틀
- template
- declare once
- no data in 

object : class를 이용하여 새로운 instance를 만들면 object
- instance of a class
- crated many times
- data in

### 1. Class declarations

class.js 참고


## 자바스크립트 프로토타입과 클래스

    function Person() {
        this.eyes = 2;
        this.nose = 1;
    }

    var kim = newPerson();
    var park = newPerson();

    console.log(kim.eyes, kim.nose) // 2, 1
    console.log(park.eyes, park.nose) // 2,1

    // prototype
    function Person() {
        Person.prototype.eyes = 2;
        Person.prototype.nose = 1;
    }

    var kim = new Person();
    var park = new Person();

    console.log(kim.eyes, kim.nose) // 2, 1
    console.log(park.eyes, park.nose) // 2,1

### Prototype Link, Prototype Object

Prototype Link와 Prototype Object를 통틀어 Prototype이라ㅗㄱ 부름

#### Prototype Object

    function Person() {} // => 함수
    var personObject = new Person(); // => 함수로 객체를 생성

<!-- https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67 -->