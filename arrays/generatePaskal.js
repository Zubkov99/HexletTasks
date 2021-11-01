//Создать треугольник Паскаля и выводить в консоль его строку

function generatePaskal(num) {
    let result = [[1],[1,1]];
    for (let i = 2; i <= num; i++) {

      result[i] = [];
      result[i][0] = 1;

      for (var j = 1; j < i; j++) {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
      result[i][j] = 1;
    }

    return result[num];
  }

console.log(generatePaskal(15));



//another solution
// const factorial = (n) => {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   };
  
//   const generate = (n) => {
//     const numbersCount = n + 1;
//     const line = [];
//     for (let i = 0; i < numbersCount; i += 1) {
//       line[i] = factorial(n) / (factorial(i) * factorial(n - i));
//     }
//     return line;
//   };