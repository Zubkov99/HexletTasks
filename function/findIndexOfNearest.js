// Написать функцию, которая принимает массив и число. Функция должна найти индекс ближайшего числа к массиву.Написать
// findIndexOfNearest([7, 5, 3, 2], 4) => 1

const findIndexOfNearest = (arr, number) => {
    
    const cloaser = arr.reduce((acc, item) => {
      const difference = Math.abs(item - number);
      if(difference < Math.abs(acc - number)) {
          acc = item;
      }
      return acc
      
    }, arr[0])

    return (arr.length > 0) ? arr.indexOf(cloaser) : null;
}



console.log(findIndexOfNearest([7, 5, 3, 2], 4));