class hashMap{
    constructor(size){
        this.storage = [];
        this.count = 0
        this.size = (size) ? size : 100;
        this.internalSize = 5;
    }
    //  삼항연산자 

    hash(key){
        return key.split("").reduce( function(accumulator, currentValue, currentIndex, array) {
            return accumulator + key.charCodeAt(currentIndex)
        }, 0) % this.size;
    }

    put(key,value, index){           
        index = (index) ? index : this.hash(key)
        console.log("key[index] ", index, this.count)

        // let index = this.hash(key);
        if(this.storage[index] === undefined){
            this.storage[index] = [[key, value]];
            this.count += 1
        }
        else{
            let new_index = this.storage[index].length
            if (new_index < 5){ 
                this.storage[index][this.storage[index].length] = [key,value]
                this.count += 1
            }
            else {
                this.fullCheck() ? console.log("I need resizing") : this.put(key,value, (index+1))
            }
        }
    }

    fullCheck(){
        if(this.count === this.internalSize * this.size){
            console.log("doing resizing")
            this.resize()
            this.print();
        }
    }

    resize(){
        this.size *= 2
    }

    remove(key){
        let index = this.hash(key);
        if(this.storage[index] === undefined){
            return false;
        }
        else if(this.storage[index].length === 1 && this.storage[index][0][0] === key){
            this.storage.splice(index,1);
            return true;
        }
        else{
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    this.storage[index].splice(i,1)
                    return true;
                }
            }
            return false;
        }
    }

    containsKey(key){
        
    }

    get(key){
        let index = this.hash(key);
        if(this.storage[index] === undefined){
            return false;
        }
        else if(this.storage[index].length === 1 && this.storage[index][0][0] === key){
            return this.storage[index][0][1];
        }
        else{
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    return this.storage[index][i][1];
                }
            }
            return false;
        } 
    }
    
    print(){
        for (let i = 0; i < this.size; i++){
            (this.storage[i] !== undefined) 
            ? console.log(`[${i}] : ${this.storage[i]}`) 
            : console.log(`[${i}] : Empty`)
        }
    }

    // containskey
    // isEmpty
    // keys
    // replace
    // size
    // clear

    putNextIndex(key,value){               
        let index = this.hash(key) + 1;
        console.log("key[index] ", index)
        if(this.storage[index] === undefined){
            this.storage[index] = [[key, value]];
        }
        else{
            let new_index = this.storage[index].length
            if (new_index < 5){ 
            this.storage[index][this.storage[index].length] = [key,value]
            }
            else {
                putNextIndex(key,value)
            }
        }
    }


}

let data = new hashMap(3);
repeat = data.size * data.internalSize
console.log("\n\n####  Start ####",repeat)