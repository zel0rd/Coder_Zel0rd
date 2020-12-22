arr = [ 11, 2, 31, 4, 5 ]
console.log(arr)
arr.sort( function(a,b){
    console.log(a,b,a-b,arr)
    return a - b
})
console.log(arr)