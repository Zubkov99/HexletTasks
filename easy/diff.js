function diff(firstNum, secondNum) {
    let diferens = Math.abs(firstNum - secondNum);

    if(360 - diferens < 180) {
        return 360 - diferens
    } else return diferens
}


console.log(diff(0, 45));