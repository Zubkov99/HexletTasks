const formattedTime = (time) => {
    let hours =  Math.floor(time / 60) % 24;
    let minutes = time % 60;

    if(minutes < 10) {
        minutes = `0${minutes}`
    }
    if(hours < 10) {
        hours = `0${hours}`
    }

    return `${hours}:${minutes}`
}


formattedTime(1504)