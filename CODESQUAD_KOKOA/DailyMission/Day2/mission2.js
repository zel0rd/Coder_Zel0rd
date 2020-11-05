// 1. factorial_calculator
function getArrayMultiple(num){
    let temp = 1;
    let arr = [...Array(num)].map((v,i) => i + 1)
    arr.forEach(function (n) {
        temp *= n
    });
    return temp
}

function factorial(n){
    if(n === 0){ return [ 0 ] }
    return Array.from({ length: n }, (_,i) => getArrayMultiple(i + 1))
}

function calculate(n){
    console.log(factorial(n))
}

calculate(4)
// ************************************************** //


// 2. 배열 거르기 (forEach, filter, map)
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

// case1.
function checkSpecial(str){ 
    let special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi; 
    if(special_pattern.test(str) == false){ return str } 
}

function replaceNumber(str){
    return str.replace(/[0-9]/g,'');
}

function filterId(peoples){
    result = peoples.filter(checkSpecial).map(replaceNumber)
    console.log(result)
}

filterId(peoples)

// case2.
function filterId2(peoples){
    result = []
    let special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi; 
    for(let i=0;i < peoples.length ; i++){
        if(special_pattern.test(peoples[i]) == false){
            result.push(peoples[i].replace(/[0-9]/g,''))
        }
    }
    console.log(result)
}
filterId2(peoples)

// ************************************************** //


// 3. 평균 구하기
const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];

function getAverage(arr){
    return parseInt(arr.reduce((a,b) => (a+b)) / arr.length);
}

function getBestArr(arr){
    let max = arr.reduce(function(a,b) {
        return Math.max(a,b);
    })
    return max;
}

function getAverageObj(obj){
    let sum = 0
    for(key in obj){
        sum += obj[key]
    }
    return parseInt(sum / obj.length)
}


let averages = grades.map(function(v) {
    return getAverage(v)
});
console.log(averages)

let bestScores = grades.map(function(v) {
    return getBestArr(v)
})

let bestAverage = getAverageObj(bestScores)

console.log(bestAverage)
// ************************************************** //


// 4. 배열 만들기
const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

result = []
for (key in data){
    const sub = data[key]
    for (a in sub){
        if (typeof sub[a] === 'number'){
            result.push(a)
        }
    }
}
console.log(result)

// ************************************************** //


// 5. 배열 결과 출력
const node = [{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "111-222-0000",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-000-3333",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-000-0000",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-0000-0000",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}]

function getChildNode(v){
    node.map(function (v){
        return v.childnode
    })
}

// console.log(getChildNode(node))

// ************************************************** //


// 6. reduce 만들기
// const myReduce = (arr, callback, initialValue) => {
//     //여기에 구현
// }

// const result = myReduce(arr, (next,prev) => {...}, []);


// ************************************************** //


// 7. 추가미션

// ************************************************** //
