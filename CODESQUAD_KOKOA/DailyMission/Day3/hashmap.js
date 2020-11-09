const hash = (string, max) =>{
    let hash = 0;
    for (let i = 0; i < string.length; i++) hash += string.charCodeAt(i);
    return hash% max;
    // return hash;
}

const HashMap = function(){
    let storage = [];
    const storageLimit = 10;

    this.clear = () => {
        storage = []
    }

    this.contains = key => {
        const index = hash(key, storageLimit);
        if (storage[index] === undefined) return false;
        else {
          for (let i = 0; i < storage[index].length; i++) {
            if (storage[index][i][0] === key) return true;
          }
          return false
        }
    };

    this.getValue = key => {
        const index = hash(key, storageLimit);
        if (storage[index] === undefined) return undefined;
        else {
          for (let i = 0; i < storage[index].length; i++) {
            if (storage[index][i][0] === key) return storage[index][i][1];
          }
        }
    };

    this.isEmpty = () => {
        if (storage.length == 0) return true;
        return false;
    }

    this.keys = () => {
        // console.log(storage)
        var key = new Array
        for (let i = 0; i < storage.length; i++) {
            if (storage[i] !== undefined) {
                // console.log(storage[i])
                // console.log(storage[i].length)
                for (let j = 0; j < storage[i].length; j++){
                    // console.log(storage[i][j][0])
                    key.push(storage[i][j][0])
                }
            }
        }
        return key
    }

    this.put = (key,value) => {
        const index = hash(key, storageLimit);
        if (storage[index] === undefined){
            storage[index] = [[key, value]];
        } else {
            const inserted = false;
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key){
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted == false) storage[index].push([key,value]);
        }
        console.log(index)
    }
    
    this.remove = (key) => {
        const index = hash(key, storageLimit);
        if (storage[index] !== undefined){
            storage.splice(index,1)
        }
        return 'removed'
    }

    this.replace = (key,value) => {
        const index = hash(key, storageLimit);
        if (storage[index] === undefined){
            storage[index] = [[key, value]]
        }
        else {
            storage.splice(index,1)
            storage[index] = [[key, value]]
        }
        return 'replaced'
    }

    this.size = () => {
        let hashSize = 0
        for (let i = 0; i < storage.length; i++){
            if (storage[i] !== undefined) {
                for (let j = 0; j < storage[i].length; j++){
                    hashSize += 1
                }
            }
        }
        return hashSize
    }
    
    this.print = () => {
        let data = new Array
        for (let i=0; i < storage.length; i++){
            if (storage[i] !== undefined){
                data.push(storage[i])
            }
        }
        return data
    }

}

const ht = new HashMap();

console.log('####################')
// put test
console.log('do put 3 items')
ht.put('JohnSmith','521-1234')
ht.put('LisaSmith','521-8976')
ht.put('SandraDee','521-9655')
console.log('=== result ===')
console.log(ht.print())
console.log('####################')
// clear test
console.log('do clear')
ht.clear()
console.log('=== result ===')
console.log(ht.print())
console.log('####################')
// put test again
console.log('do put 3 items')
ht.put('JohnSmith','521-1234')
ht.put('JohnSmithd','521-8976') // same index
ht.put('LisaSmith','521-8976')
ht.put('SandraDee','521-9655')
console.log('=== result ===')
console.log(ht.print())
console.log('####################')
// contains test
console.log('JohnSmith is contained??')
console.log('=== result ===')
console.log(ht.contains('JohnSmith')) // expected : true
console.log('####################')
// getValue test
console.log('get value of JohnSmith')
console.log('=== result ===')
console.log(ht.getValue('JohnSmith')) // expected : 521-1234
console.log('####################')
// isEmpty test
console.log('JohnSmith is Empty?')
console.log('=== result ===')
console.log(ht.isEmpty('JohnSmith')) // expected : false
console.log('####################')
// keys test
console.log('get keys')
console.log('=== result ===')
console.log(ht.keys()) // expected : JohnSmith, JohnSmithd, LisaSmith, SandraDee
console.log('####################')
// remove test
console.log('remove SandraDee')
console.log('=== result ===')
ht.remove('SandraDee')
console.log(ht.print()) // expected : JohnSmith, JohnSmithd, LisaSmith
console.log('####################')
// replace test
console.log('replace LisaSmith to 111-1111')
console.log('=== result ===')
ht.replace('LisaSmith','111-1111')
console.log(ht.print()) // expected : ListSmith, 111-1111
console.log('####################')
// size test
console.log('get size')
console.log('=== result ===')
console.log(ht.size()) // expected : 3
console.log('####################')

console.log(typeof ht.keys())

module.exports = HashMap

