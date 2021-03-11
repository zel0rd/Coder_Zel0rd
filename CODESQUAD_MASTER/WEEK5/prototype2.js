function Car(brand) {
  this.carname = brand;
}

Car.prototype.present = function() {
    return 'I have a ' + this.carname;
}

function Model(brand, mod){
  this.model = mod;
}
Model.prototype = Car.prototype;

Model.prototype.show = function() {
  return this.present() + ', it is a ' + this.model;
}

const mycar = new Model("Ford","Mustang");
mycar.show()