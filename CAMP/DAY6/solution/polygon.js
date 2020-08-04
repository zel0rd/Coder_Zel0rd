const size = 24;

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

module.exports = Polygon;