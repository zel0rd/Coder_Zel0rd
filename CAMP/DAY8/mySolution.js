const PROCESS_UNIT_SIZE = 16
class CPU {
    constructor() {
        this.Register = Array.from({ length: 8 }, () => 0);
        this.PC = undefined;
        this.memoryMap = new Map();
        this.progMemory = [];
    }
    load(programs) {
        this.progMemory = programs;
        console.log(' [[ loaded program to memory  ]]\n', programs)
    }
    fetch() {
        if(this.PC === undefined){
            this.PC = 0
        }else{
            this.PC += 1
        }
    }
    reset() {
        this.Register = Array.from({ length: 7 }, () => 0);
        PC = 0;
    }
    ALU(op1, op2, operator) {
        switch (operator) {
            case 1: return op1 + op2;
            case 2: return op1 - op2;
            case 3: return op1 & op2;
            case 4: return op1 | op2;
        }
    }
    execute() {
        let oper=getOper(this.progMemory[this.PC])
        let command=this.progMemory[this.PC].split(' ')
        console.log(command)
        command[0] = oper
        command[0] = commandMap.get(command[0])
        
        switch (command[0]) {
            case 1:
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var b = parseInt(this.Register[command[3].replace(',','').slice(1)],16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + (a+b).toString(16).toUpperCase()
                break;
            case 2:
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var b = parseInt(command[3].slice(1),16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + (a+b).toString(16).toUpperCase()
                break;
            case 3:
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var a = parseInt(this.Register[command[3].replace(',','').slice(1)],16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + this.ALU(a,b, 1).toString(16).toUpperCase();
                break;
            case 4:
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var b = parseInt(command[3].slice(1),16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + this.ALU(a,b, 1).toString(16).toUpperCase();
                break;
            case 5:
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var b = parseInt(this.Register[command[3].replace(',','').slice(1)],16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + this.ALU(a,b, 3).toString(16).toUpperCase();
                break;
            case 6:
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var b = parseInt(this.Register[command[3].replace(',','').slice(1)],16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + this.ALU(a,b, 4).toString(16).toUpperCase();
                break;
            case 7:
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var b = parseInt(this.Register[command[3].replace(',','').slice(1)],16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + this.ALU(a,b, 1).toString(16).toUpperCase();
                break;
            case 8:
                // var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var b = parseInt(command[3].slice(1),16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + this.ALU(a,b, 1).toString(16).toUpperCase();
                break;
            case 9:
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var b = parseInt(this.Register[command[3].replace(',','').slice(1)],16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + this.ALU(a,b, 2).toString(16).toUpperCase();
                break;
            case 10:
                var a = parseInt(this.Register[command[2].replace(',','').slice(1)],16)
                var b = parseInt(command[3].slice(1),16)
                this.Register[command[1].replace(',','').slice(1)] = "0x" + this.ALU(a,b, 2).toString(16).toUpperCase();
                break;
            case 11:
                this.Register[command[1].replace(',','').slice(1)] = command[2]
        }
    }

    dump() {
        return this.Register;
    }
}

let programs = [
    'MOV R4, 0xA0',
    'MOV R5, 0x02',
    'LOAD R1, R4, R5',
    'ADD R2, R1, #4',
    'SUB R3, R1, R2',
    'STORE R3, R4, #4',
    'OR R6, R4, R5',
    'AND R7, R1, R2',
]

const commandMap = new Map([
    ['LOAD', 1], ['LOAD#', 2], ['STORE', 3], ['STORE#', 4], ['AND', 5],
    ['OR', 6], ['ADD', 7], ['ADD#', 8], ['SUB', 9], ['SUB#', 10], ['MOV', 11]
]);

function getOper(input){
    inputLength = input.split(' ').length
    return input.split(' ')[0] + (input.split(' ')[inputLength-1].charAt(0) === "#" ? "#" : "")
}



cpu = new CPU();

console.log("\n")
cpu.load(programs)
console.log("\n")

for (let i = 0; i < programs.length; i++) {
    console.log(`현재 PC : ${cpu.PC}`)
    console.log(`실행코드 : ${programs[i]}`);

    console.log('[[ fetch() ]]')
    process.stdout.write(`PC 변화 : ${cpu.PC} -> `);
    cpu.fetch();
    process.stdout.write(`${cpu.PC} \n`)
    console.log('[[ execute() ]] ')
    cpu.execute(cpu.PC);

    console.log('\n')
    curReg = cpu.dump();
    for (let j = 1; j < 8; j++) {
        process.stdout.write(` R${j} : ${cpu.Register[j]}, `);
    }
    process.stdout.write('\n\n\n');
}
