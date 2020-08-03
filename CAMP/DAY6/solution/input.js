const readline = require("readline");
const { nextTick } = require("process");
const Point = require("./point");
const Line = require("./line");
const Triangle = require("./triangle");

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
        }
        return polygon;
    }
 
    print() {
        console.log("end");
    }
}


const main = new Main();
main.input();