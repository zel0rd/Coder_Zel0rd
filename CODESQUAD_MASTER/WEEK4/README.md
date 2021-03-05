# week4


## ES Modules
- 모듈라 프로그래밍은 복잡한 애플리케이션을 모듈 단위로 만들어 관계를 짓는 프로그래밍 방법이며, 웹프론트엔드에서도 SPA의 등장으로 더욱 필요성이 커졌다.

> SPA란?
> SPA란 (Single Page Application) 단일 페이지 애플리케이션으로 현재 웹 개발의 트랜드이다.
> 기존의 웹은 요청시미다 페이지 전체를 요청하고 로드하는 방식이였지만 SPA는 브라우저를 최초에 한번만 로드하고 이후에는 특정부분만 Ajax를 통해 바인딩하는 방식이다.

자바스크립트에서 모듈을 구현하기 위한 방법
- The Module Pattern
- Object literal notation
- AMD Modules
- CommonJS Modules
- ECMAScript Harmony Modules


### Modern Modular JavaScript Design Pattern

Object Literals

```JavaScript
var myObjectLiteral = {
    variableKey: variableValue;

    functionKey: function() {

    }
}
```

객체 리터럴 표현에서 객체는 콤마로 구분되는 키/밸류 형태로 curry braces{} 안에 위치
객체의 경우 newf를 사용한 초기화가 필요 없음
객체의 밖에서 Dot 표현으로 새로운 멤버 추가 가능
객체표현으로 코드를 캡슐화 하거나 구조화 시키는 것이 가능
위와 같은 객체를 통한 기법을 이해한다면 Module Pattern에도 적용가능

The Module Pattern

```javascript
var testModule = (function() {
    var counter = 0;

    return {
        incrementCounter: function() {
            return counter++;
        }

        resetCount: function(){
            console.log("counter value prior to reset : " + counter);
            counter = 0;
        }
    };
})();

testModule.incrementCounter();
testModule.resetCounter();
```

Module Pattern은 클로저를 사용해서 상태와 구조를 캡슐화 시켜 private하게 만들 수 있습니다.
실제 자바스크립트는 private에 대한 개념이 없음(access modifiers가 없음 - public, protect, default, private)