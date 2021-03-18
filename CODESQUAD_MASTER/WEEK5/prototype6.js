//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call

function Car(brand) {
  this.carname = brand;
}

Car.prototype.present = function() {
    return 'I have a ' + this.carname;
}

function Model(brand, mod){
  // Car.call(this, brand)
  this.carname = brand
  this.model = mod;
}
Model.prototype = Object.create(Car.prototype);

Model.prototype.show = function() {
  return this.present() + ', it is a ' + this.model;
}

const mycar = new Model("Ford","Mustang");
mycar.show()

// 바인드도 내부적으로 콜!!

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// console.log(new Food('cheese', 5).name);
// // expected output: "cheese"