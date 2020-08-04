const Point = require('./point');
const Polygon = require('./polygon');

class Triangle extends Polygon {

    //TODO: implement this!
    calculate() {
        const [a, b, c] = this.points;
        const s = a.x + b.x + c.x;
        console.log(`삼각형의 넓에는 ${s}입니다.`);
    }
}

module.exports = Triangle;