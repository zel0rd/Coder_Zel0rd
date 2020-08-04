// 1. Class declarations
class Person{
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

var test1 = new Person()
var test2 = new Person()
console.log("?class doesn't use to proto?")
console.log(test1.speak === test2.speak)
// const ellie = new Person('ellie',20);
// console.log(ellie.name)
// console.log(ellie.age)
// ellie.speak()

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        // this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}

// const user1 = new User('Steve','Job',-1);
// console.log(user1.age)
// output : Maximum call stack size exceeded

// 3. Fields (public, private)
// Too soon!
class Experiment{
    pulibcField = 2;
    #privateField = 0;
}
// const experiment = new Experiment()
// console.log(experiment.pulibcField) // 2
// console.log(experiment.privateField) // undefined

// 4. Static properties and methods
// Too Soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}
// object와 상관없이 동일하게 반복적으로 사용되는 method를 쓸 때 static 사용함
// const article1 = new Article(1);
// const article2 = new Article(2);
// console.log(article1.publisher) // undefined
// console.log(Article.publisher) // Dream Coding
// Article.printPublisher() // Dream Coding

// 5. Inheritance
// a way for one class to extend anther class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`)
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
// 필요한 함수만 재정의해서 사용가능 overriding
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺')
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triagle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20,20,'blue')
rectangle.draw() // drawing blue color of
console.log(rectangle.getArea()) // 400
const triangle = new Triangle(20,20, 'red')
triangle.draw() // 🔺
console.log(triangle.getArea()) // 200

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle) // true
console.log(triangle instanceof Rectangle) // false
console.log(triangle instanceof Triangle) // true
console.log(triangle instanceof Shape) // true
console.log(triangle instanceof Object) // true
console.log(triangle.toString())