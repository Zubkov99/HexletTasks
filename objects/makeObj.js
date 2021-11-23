// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив, 
// состоящий из массивов-пар и возвращает объект, полученный из этих пар.

const makeObj = (arr) => {
  const result = {};

  arr.map( ([key, value]) => {
      result[key] = value;
  })

  return result
}

makeObj([['cat', 5], ['dog', 6], ['cat', 11]])
