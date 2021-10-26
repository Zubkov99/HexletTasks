const isContinuousSequence = (arr) => {
    let newArr = [];

    arr.map((item, index) => {
        if(item + 1== arr[index + 1]) {
            newArr.push(item)
            newArr.push(arr[index + 1])
        }
    }) //отобрали последовательности

    let set = [...new Set(newArr)]; // оставили только уникальные элементы 
    
    let sortedArr =  set.map((item, index) => {
        if (item + 1 != set[index + 1]) {
            return set[index] += '|'
        } return item
    })  //добавили разделитель между последовательностями '|'

    const couplesOfNum = []

    sortedArr.map((item, index, arr) => {

        if(index == 0) {
            couplesOfNum.push(`${item}->`)
        }

        if(String(arr[index - 1]).includes('|')) {
            couplesOfNum.push(`${item}->`)
        }

        if(String(item).includes('|')) {
            couplesOfNum.push(item.slice(0, item.length - 1))
        }
    }) // запушили в промежуточный массив couplesOfNum первые и последние чисела последовательности с помощью разделителя

    const result = [];

    couplesOfNum.map((item, index, arr) => {
        if(index % 2 == 0) {
            result.push(item + arr[index + 1])
        }
    }) //объеденили элементы массива arr[0] c arr[1], arr[2] c arr[3] и тд

    return result
}


console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]));