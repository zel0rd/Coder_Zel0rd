//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call

function Car(brand) {
  this.carname = brand;
}

function Bus(company){
  this.company = company
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
// prototype chaining
// https://www.google.com/search?sxsrf=ALeKk006jpuQvBpGycxDJ96znymaD60Qwg%3A1615346110129&ei=vjlIYIS-B4GVr7wP19yV2A0&q=prototype+chain&oq=prototype+chain&gs_lcp=Cgdnd3Mtd2l6EAMyAggAMgIIADICCAAyAggAMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeOgcIIxCwAxAnOgQIIxAnOgQIABADOgUIABCxAzoICAAQsQMQgwE6DQgAEIcCELEDEIMBEBQ6BwgAEIcCEBQ6CggAELEDEIMBEAo6BwgjEOoCECc6BAgAEAo6BAgAEEM6CggAELEDEIMBEEM6BggAEAoQHlCwC1jqKmD6MGgIcAB4AoABsQGIAfsYkgEEMC4yNZgBAKABAaoBB2d3cy13aXqwAQrIAQHAAQE&sclient=gws-wiz&ved=0ahUKEwiEldWY4aTvAhWByosBHVduBdsQ4dUDCA0&uact=5

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