const [X_RANGE, Y_RANGE] = [1000,500]
const HOUSE_FRAME = ['A','B','C','D','E','F','G','H','I']

// // console.log(X_RANGE, Y_RANGE)
// // console.log(Math.random() * 1000 % 1000)
class House {
    constructor(name, x1=X_RANGE,x2=X_RANGE,y1=Y_RANGE,y2=Y_RANGE,children) {
      this.name = name;
      this.x1 = getRandomFromRange(x1);
      this.x2 = getRandomFromRange(x2);
      this.y1 = getRandomFromRange(y1);
      this.y2 = getRandomFromRange(y2);
      this.children = [];
    }

    children(){
        getRandomBetween(this.x1, this.x2)

    }
}

function getRandomFromRange(range){
    return Math.round(Math.random() * range % range)
}

function getRandomBetween(min, max) { //min ~ max 사이의 임의의 정수 반환
    return Math.floor(Math.random() * (max - min)) + min;
}



function selecthouse(){
    let houseArray = []
    HOUSE_FRAME.map( (v,i) =>{
        if (getRandomFromRange(10) < 4){
            houseArray.push(new House(v)) 
        }
    })
    return houseArray
}

function selectchildren(){
    let houseArray = selecthouse()
    houseArray.map( function(i){
        // i.
        i.children.push(selecthouse())
    })
    // return houseArray
    // return JSON.stringify(houseArray, null, 4)
    return houseArray
    
}

// console.log(selectchildren())
// console.log(JSON.stringify(selectchildren()))

// selectchildren().map(v => console.log(JSON.stringify(v)))
const p = new House()
console.log(p)
const q = new House("aa", p.x1, p.x2, p.y1, p.y2)
console.log(q)