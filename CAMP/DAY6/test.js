const make_array = (x,i) => {
    return i+2
}

// Array(99).fill().map((x,i)=>i+2).map((x)=>console.log(x));
Array(99).fill().map(make_array).map((x)=>console.log(x));