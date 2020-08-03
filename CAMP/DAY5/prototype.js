// 1. 자바스크립트 객체 다시 이해하기
var healthObj = {
    name : 'zel0rd',
    lastTime : 'PM10:12',
    showHealth : function (){
        console.log(this.name + '님, 오늘은 ' + this.lastTime + '에 운동을 하셨네요')
    }
}

var healthObj2 = {
    name : 'zel0rd2',
    lastTime : 'PM08:12',
    showHealth : function (){
        console.log(this.name + '님, 오늘은 ' + this.lastTime + '에 운동을 하셨네요')
    }
}
healthObj.showHealth()
healthObj2.showHealth()
 

// 2. 객체를 동적으로 생성하는 방법 => function을 사용한다.
function Health(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
    this.showHealth = function() {
        return this.name + "님 오늘은 " + this.lastTime + "에 운동을 하셨네요!"
    }
}
var o = new Health('name','AM10:10') 
var o1 = new Health('name1','AM10:10') // Health {} type:object
console.log(o.showHealth === o1.showHealth) // false
// 이 때 Health를 생성자(constructor)라고 함
// o.showhealth o1.showHealth가 중복해서 존재(동일한 메서드가 여러 공간을 차지)


// 3. prototype으로 메서드를 같이 사용해보자

function Health2(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
    Health.prototype.showHealth = function() {
        return this.name + "님 오늘은 " + this.lastTime + "에 운동을 하셨네요!"
    }
}

var o2 = new Health2('name2','AM10:10')
var o3 = new Health2('name3','AM10:10')
console.log(o2.showHealth === o3.showHealth) // true
