const make = (numer, denom) => {
    return {
        numer,
        denom,
        getNumer() {
            return this.numer
        },
        getDenom() {
            return this.denom
        },
        toString() {
            return `${this.numer}/${this.denom}`
        },
        add(rational) {
            const newNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom();
            const newDenom = this.getDenom() * rational.getDenom();
            return make(newNumer, newDenom);
        }
    }
}

const rat1 = make(3, 9);
const rat2 = make(10, 3);
const rat3 = rat1.add(rat2);
console.log(rat3.getNumer());