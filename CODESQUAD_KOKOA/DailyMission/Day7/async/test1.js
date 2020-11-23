function plus() {
    let a = 1;
    setTimeout( () => console.log(++a),1000);
    return a;
}

const result = plus()
console.log('result :', result);