const CPU = require('./CPU.js');
const input = [
    'MOV R4, 0xA0',
    'MOV R5, 0x02',
    'LOAD R1, R4, R5',
    'ADD R2, R1, #4',
    'SUB R3, R1, R2',
    'STORE R3, R4, #4'];    // 프로그램 코드
const commandMap = new Map([
    ['', 0], ['LOAD', 1], ['LOAD#', 2], ['STORE', 3], ['STORE#', 4], ['AND', 5],
    ['OR', 6], ['ADD', 7], ['ADD#', 8], ['SUB', 9], ['SUB#', 10], ['MOV#', 11]
]);
let machineCode = [], codeLength = input.length, curReg;
cpu = new CPU();

function assembler(code) {
    let splary = code.replace(/,/, '').split(' '), ans = '', length = splary.length;
    splary[0] += (splary[length - 1].charAt(0) !== 'R') ? '#' : '';
    ans += ('000' + commandMap.get(splary[0]).toString(2)).slice(-4);
    for (let i = 1; i < length; i++) {
        if (i === length - 1 && splary[0] !== 'MOV#') ans += (splary[i].charAt(0) === '#') ? '1' : '000';
        if (splary[i].charAt(0) == 'R') ans += ('00' + parseInt(splary[i].charAt(1)).toString(2)).slice(-3);
        else {
            if (splary[i].charAt(0) == '#') splary[i] = splary[i].replace(/#/, '');
            if (splary[0] == 'MOV#') ans += ('00000000' + parseInt(splary[i]).toString(2)).slice(-9);
            else ans += ('0000' + parseInt(splary[i]).toString(2)).slice(-5);
        }
    }
    return ans;
}
machineCode = input.reduce((ary, cur) => {
    ary.push(assembler(cur));
    return ary;
}, []);     //기계어로 번역

cpu.load(machineCode);
for (let i = 0; i < codeLength; i++) {
    console.log(`실행코드 : ${input[i]}`);
    process.stdout.write(`PC 변화 : ${cpu.PC} -> `);
    cpu.fetch();
    process.stdout.write(`${cpu.PC} \n {`);
    cpu.execute();
    curReg = cpu.dump();
    for (let j = 1; j < 8; j++) {
        process.stdout.write(` R${j} : ${curReg[j]}, `);
    }
    process.stdout.write('}\n\n\n');
}