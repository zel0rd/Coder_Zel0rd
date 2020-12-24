// arr = [ 11, 2, 31, 4, 5 ]
// console.log(arr)
// arr.sort( function(a,b){
//     console.log(a,b,a-b,arr)
//     return a - b
// })
// console.log(arr)

const array = ['12', '34', '56', '78', '99'];
const x = array
.reduce((acc, curr, i, arr) => {
    if(i === 2) arr.splice(1);  // eject early
    return acc += curr;
  }, '');
console.log('x: ', x);  // x:  99195