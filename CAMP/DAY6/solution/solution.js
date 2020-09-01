const readline = require("readline");
// const { nextTick } = require("process");
// const Point = require("./point");
// const Line = require("./line");
// const Triangle = require("./triangle");

const size = 24;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Polygon {
    constructor(points) {
        this.points = points;
        this.board = [];
        for (let i = 0; i <= size; i++) {
            this.board[i] = [];
            for (let j = 0; j <= size; j++) {
                this.board[i][j] = ' ';
            }
        }
    }
    print() {
        this.points.forEach(p => {
            this.board[p.y][p.x]  = 'x';
        });
        console.log('  0----5----0----5----0----');

        for (let i = 0; i <= size; i++) {
            if (i% 5 == 0) {
                console.log((i % 10) + '|' + this.board[i].join(""));
            } else {
                console.log(' |' + this.board[i].join(""));
            }
        }
    }
}

class Line extends Polygon {
    calculate() {
        const [a, b] = this.points;
        const length = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
        console.log(`두 점 사이의 거리는 ${length}입니다.`);
    }
}

class Triangle extends Polygon {
    //TODO: implement this!
    calculate() {
        const [a, b, c] = this.points;
        const s = a.x + b.x + c.x;
        console.log(`삼각형의 넓에는 ${s}입니다.`);
    }
}

class Rectangle extends Polygon {
    //TODO: implement this!
    calculate() {
        const [a, b, c, d] = this.points;
        const s = a.x + b.x + c.x + d.x;
        console.log(`삼각형의 넓에는 ${s}입니다.`);
    }
}


class Main {
    input() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        this.rl.setPrompt("좌표입력> ");
        this.rl.prompt();
        this.processing();        
    }

    processing() {
        this.rl.on("line", (line) => {
            if (line.length == 0) {
                this.rl.close();
            }
            const points = this.getPoints(line);
            const polygon = this.makePolygon(points);
            polygon.print();
            polygon.calculate();
            this.rl.close();
        }).on('close', () => {
            process.exit();
        })
    }

    getPoints(line) {
        const points= []
        const pointStrings = line.split('-');
        pointStrings.forEach(pointStr => {
            if (pointStr[0] != '(' || pointStr[pointStr.length - 1] != ')') {
                return null;
            }
            const [x, y] = pointStr.slice(1, pointStr.length).split(',').map(e => parseInt(e));
            points.push(new Point(x, y));
        });
        return points;        
    }

    makePolygon(args) {
        let polygon;
        switch(args.length) {
            case 2:
                polygon = new Line(args);   
                break;
            case 3:
                polygon = new Triangle(args); 
                break;
            case 4:
                polygon = new Rectangle(args); 
                break;                
        }
        return polygon;
    }
 
    print() {
        console.log("end");
    }
}


const main = new Main();
main.input();