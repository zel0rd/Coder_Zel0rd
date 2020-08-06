class controlUnit {     //제어장치
    constructor() {
        this.IR = '';
    }
    decode() {
        let classify = [ 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 2 ]
        let command = parseInt(this.IR.slice(0, 4), 2), para1 = parseInt(this.IR.slice(4, 7), 2), para2 = 0, para3 = 0;
        switch(classify[command]){
            case 0:
                para2 = parseInt(this.IR.slice(7, 10), 2);
                para3 = parseInt(this.IR.slice(-3), 2);
                break;
            case 1:
                para2 = parseInt(this.IR.slice(7, 10), 2);
                para3 = parseInt(this.IR.slice(-5), 2);
                break;
            case 2:
                para2 = parseInt(this.IR.slice(-9), 2);
        }
        return [command, para1, para2, para3];
    }
}
module.exports = controlUnit;