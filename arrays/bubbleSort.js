const bubbleSort = (arr) => {

    let check;
    let stepsCount = arr.length - 1;

    do {
        check = false
        for(let i = 0; i < stepsCount; i++) {
            if(arr[i] > arr[i + 1]) {
                const drop = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = drop;
                check = true;
            }  
        }
        stepsCount--;
    } while (check);

    return arr
}



console.log(bubbleSort([3, 2, 10, -2, 0]));