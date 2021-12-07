// Реализуйте абстракцию для работы с рациональными числами, включающую в себя следующие функции:

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const getNumer = (grit) => {
    const result = grit.split('/')[0];
    return +result
 }
 
 const getDenom = (grit) => {
     const result = grit.split('/')[1];
     return +result
 };

function nok(num1, num2) {
    return num1 * num2 / getGcd(num1, num2);
  }

const makeRational = (numer, denom) => {
    const gsd = getGcd(numer, denom)
    return `${numer / gsd}/${denom / gsd}`
}

const add = (grit1, grit2) => {
    const publicDenom = nok(getDenom(grit1), getDenom(grit2));
    const newNumer1 = getNumer(grit1) * (publicDenom / getDenom(grit1));
    const newNumer2 = getNumer(grit2) * (publicDenom / getDenom(grit2)); 

    const sumOfNumer = newNumer1 + newNumer2;
    return makeRational(sumOfNumer, publicDenom)
}

const sub = (grit1, grit2) => {
    const publicDenom = nok(getDenom(grit1), getDenom(grit2));

    const newNumer1 = getNumer(grit1) * (publicDenom / getDenom(grit1));
    const newNumer2 = getNumer(grit2) * (publicDenom / getDenom(grit2)); 

    const sumOfNumer = newNumer1 - newNumer2;

    return makeRational(sumOfNumer, publicDenom)
}

const rat1 = makeRational(3, 9);
const rat2 = makeRational(10, 3);
const rat3 =  add(rat1, rat2);
const rat4 = sub(rat1, rat2);
console.log(rat4);

// console.log(rat3);





