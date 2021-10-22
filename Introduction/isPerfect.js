const isPerfect = (num) => {
    let result = 0;

    for(let i = 0; i < num; i++) {
        if(num % i === 0) {
            result += i;
        }
    }

    if(num <= 0 || result != num) {
        return false
    }

    return true
}



console.log(isPerfect(8128));
// isPerfect(6)