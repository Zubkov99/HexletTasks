import _ from "lodash";

// Реализуйте функцию, которая объединяет несколько словарей (объектов) в один общий словарь. 
// Функция принимает любое количество аргументов и возвращает результат в виде объекта, 
// в котором каждый ключ содержит список уникальных значений в виде массива. 
// Элементы в списке располагаются в том порядке, в котором они появляются во входящих словарях.

const merge = (...data) => {
  
  const result = {};

  data.map(obj => {

    _.map(obj, (value, key) => {
      if (!_.has(result, key)) {
        result[key] = [];
      }
      if(!result[key].includes(value)) {
      result[key].push(value)
      }
    })
  });

 return result;
}

merge(
  { a: 1, b: 2, c: 3 },
  {},
  { a: 3, b: 2, d: 5 },
  { a: 6 },
  { b: 4, c: 3, d: 2 },
  { e: 9 },
);