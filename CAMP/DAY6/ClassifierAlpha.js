class ClassifierAlpha {
    number = 0;

    constructor(number) {
        this.number = number;
    }    

    isFactor(potentialFactor) {
        return this.number % potentialFactor == 0;
    }

    factors() {
        var factorSet = new Set();
        for (var pod = 1; pod <= Math.sqrt(this.number); pod++ ) {
            if (this.isFactor(pod)) {
                factorSet.add(pod);
                factorSet.add(this.number / pod);
            }
        }
        return factorSet;
    }

    isPerfect() {
        return (ClassifierAlpha.sum(this.factors()) - this.number) == this.number 
    }

    isAbundant() {
        return (ClassifierAlpha.sum(this.factors()) - this.number) > this.number 
    }

    isDeficient() {
        return (ClassifierAlpha.sum(this.factors()) - this.number) < this.number 
    }

    static sum(factors) {
        var total = 0;
        factors.forEach( (factor) => {
            total += factor;
        });
        return total;
    }
}

var alpha1 = new ClassifierAlpha(10);
var alpha2 = new ClassifierAlpha(6);

console.log(alpha1.isPerfect());
console.log(alpha2.isPerfect());