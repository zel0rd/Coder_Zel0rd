const baseData = [1,2,3,4,5,6,100]


function foo() {
    baseData.forEach((v,i) => {
        console.log("sync", i);
        bar();
    })
}

function bar() {
    baseData.forEach((v,i) => {
        debugger;
        console.log("sync2", i);
    })
}

foo()