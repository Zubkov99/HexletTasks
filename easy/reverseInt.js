export default function reverseInt(num) {

    if(num < 0) {
        num = '-' + num.toString()
        .slice(1)
        .split('')
        .reverse()
        .join('');
    } else {
        num = num.toString()
        .split('')
        .reverse()
        .join('');
    };

    return +num;
};

console.log(reverseInt(-422059820));