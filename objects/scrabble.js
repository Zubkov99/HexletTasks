import _ from 'lodash';

// Реализуйте функцию-предикат, которая принимает на вход два параметра: набор символов в нижнем регистре (строку) и слово, 
// и проверяет, можно ли из переданного набора составить это слово. В результате вызова функция возвращает true или false.

const scrabble = (symbols, tagretWord) => {

   const tagretMasterObj = {};
   const secondObj = {};

   const symbolsArr = symbols.toLowerCase().split('');
   const tagretWordsArr = tagretWord.toLowerCase().split('');

   tagretWordsArr.map(item => {
       if(_.has(tagretMasterObj, item)) {
        tagretMasterObj[item] += 1;
       } else {
        tagretMasterObj[item] = 1;
       }
   });

   symbolsArr.map( item => {
       if(tagretWordsArr.includes(item) && _.has(secondObj, item)) {
        secondObj[item] += 1;
       } else if(tagretWordsArr.includes(item) && !_.has(secondObj, item)) {
        secondObj[item] = 1;
       }
   });

   let flug = true;
  
  _.map(tagretMasterObj, (item, value) => {
       if(secondObj[value] < tagretMasterObj[value] || !_.has(secondObj, value)) {
        flug = false;
       } 
    })

    return flug
}

scrabble('katas', 'steaak')
