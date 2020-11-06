function Person(name, gender){
    this.name = name;
    this.gender = gender;
}

temp = []
temp.push(new Person('aa','female'))
temp.push(new Person('BB','male'))

console.log(temp)
console.log(temp[0].name)
console.log(temp[0].gender)