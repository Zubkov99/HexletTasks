// Реализуйте и экспортируйте по умолчанию функцию, которая принимает изображение в виде двумерного массива и возвращает массив, увеличенный в два раза.

const arr = [
    ['*', '*', '*', '*'],
    ['*', ' ', ' ', '*'],
    ['*', ' ', ' ', '*'],
    ['*', '*', '*', '*'],
  ];
 

//first solution
  const enlargeArrayImage = (arr) => {
    const newArray = arr.map( firstItem => {
        return firstItem = firstItem.map( secondItem => {
            return secondItem += secondItem;
        })
        .join('')
        .split('')
    })
    return newArray.map( item => [item, item]).flat();
}


//SECOND SOLUTION
// const duplicateValues = (items) => items.flatMap((item) => [item, item]);
// const enlargeArrayImage = (items) => {
//   const horizontallyStretched = items.map(duplicateValues);
//   return duplicateValues(horizontallyStretched);
// };

console.log(enlargeArrayImage(arr));
  