const controlUnit = require('./controlUnit.js');
class CPU extends controlUnit {
    constructor() {
        super();
        this.Register = Array.from({ length: 8 }, () => 0);   //R1 ~ R7
        this.PC = 0;
        this.memoryMap = new Map();
        this.progMemory = [];
    }

    ALU(op1, op2, operator) {
        switch (operator) {   // operator 1:+, 2:-, 3:and, 4:or
            case 1: return op1 + op2;
            case 2: return op1 - op2;
            case 3: return op1 & op2;
            case 4: return op1 | op2;
        }
    }

    memoryStore(address, val) {
        this.memoryMap.set(address, val);
    }

    load(input) {
        this.progMemory = input;
    }

    reset() {   //초기화
        this.Register = Array.from({ length: 7 }, () => 0);
        PC = 0;
    }

    fetch() {
        super.IR = this.progMemory[this.PC++];
    }

    execute() {
        let command = super.decode(), address;
        switch (command[0]) {
            case 1:
                address = this.ALU(this.Register[command[2]], this.Register[command[3]], 1);
                this.Register[command[1]] = (this.memoryMap.get(address)) ? this.memoryMap.get(address) : 0;
                break;
            case 2:
                address = this.ALU(this.Register[command[2]], command[3], 1);
                this.Register[command[1]] = (this.memoryMap.get(address)) ? this.memoryMap.get(address) : 0;
                break;
            case 3:
                this.Register[command[1]] = this.ALU(this.Register[command[2]], this.Register[command[3]], 1);
                break;
            case 4:
                this.Register[command[1]] = this.ALU(this.Register[command[2]], command[3], 1);
                break;
            case 5:
                this.Register[command[1]] = this.ALU(this.Register[command[2]], this.Register[command[3]], 3);
                break;
            case 6:
                this.Register[command[1]] = this.ALU(this.Register[command[2]], this.Register[command[3]], 4);
                break;
            case 7:
                this.Register[command[1]] = this.ALU(this.Register[command[2]], this.Register[command[3]], 1);
                break;
            case 8:
                this.Register[command[1]] = this.ALU(this.Register[command[2]], command[3], 1);
                break;
            case 9:
                this.Register[command[1]] = this.ALU(this.Register[command[2]], this.Register[command[3]], 2);
                break;
            case 10:
                this.Register[command[1]] = this.ALU(this.Register[command[2]], command[3], 2);
                break;
            case 11:
                this.Register[command[1]] = command[2];
        }
    }

    dump() {
        return this.Register;
    }
}
module.exports = CPU;