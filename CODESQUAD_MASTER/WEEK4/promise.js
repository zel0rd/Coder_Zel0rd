'use strict';

// Promise is a JavaScript Object for asynchronous operation

/*
1. status : pending-> fulfilled or rejected
2. producer - consumer

*/


// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work ()
    console.log("doing something...");
    setTimeout(() => {
        resolve('ellie')
        // reject(new Error('no network'))
    }, 2000);
})
// promise를 만드는 순간 exec 콜백함수가 바로 실행되기 때문에 불필요하게 통신을 하게 됨

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log('finally'))
// promise가 잘 수행되어 resolve라는 콜백함수의 전달값이 value로 넘어옴


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    // setTimeout(() => resolve(1), 1000);
    setTimeout(() => reject("ERROR"));
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    })
    .then(num => console.log(num))
    .catch()


// 4. Error Handling
const getHen = () =>
    new Promise((resovle, reject) => {
        setTimeout(() => resovle('🥚'), 1000)
    });

const getEgg = hen =>
    new Promise((resovle, reject) => {
        // setTimeout(() => resovle(`${hen} => 🍿`), 1000)
        setTimeout(() => reject(new Error(`error! ${hen} => 🍿`)), 1000);
    });

const cook = egg =>
    new Promise((resovle, reject) => {
        setTimeout(() => resovle(`${egg} => 🍔`), 1000)
    });

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));

// getHen()
//     .then(hen)
//     .then(egg)
//     .then(console.log);

getHen() //
    .then(getEgg)
    .catch(error => {
        return '🍕';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

getHen().then(getEgg).catch(error => {
        return '🍕';
    }).then(cook).then(console.log).catch(console.log);


// 5. 


let da  =1;
const promise = new Promise( (resolve, reject) => {
    if( da === 0 ) {
        setTimeout( () => {
            resolve("goody");
        }, 2000);
    } else {
        setTimeout( () => {
            reject(new Error("da is 1"));
        }, 2000);
    }
    
});

const promise = () =>
    new Promise((resovle, reject) => {
        if( da === 0 ) {
            setTimeout( () => {
                resolve("goody");
            }, 2000);
        } else {
            setTimeout( () => {
                reject(new Error("da is 1"));
            }, 2000);
        }
    });

promise
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
    console.log(error);
    })