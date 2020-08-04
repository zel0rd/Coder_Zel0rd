const Point = require('./point');
const Polygon = require('./polygon');

class Line extends Polygon {
    calculate() {
        const [a, b] = this.points;
        const length = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
        console.log(`두 점 사이의 거리는 ${length}입니다.`);
    }
}

module.exports = Line;