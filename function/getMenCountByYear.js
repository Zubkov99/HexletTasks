// Реализуйте функцию, которая принимает список пользователей и возвращает объект, 
// где ключ - это год рождения, а значение - это количество мужчин, родившихся в этот год.

import _ from "lodash";

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

//решение с использованием lodash
const getMenCountByYear = (users) => {
  const updateUsers = _.filter(users, item => {
    if(item.gender === 'male') {
      item.birthday = item.birthday.slice(0,4);
      return item;
    }
  }); 

  return _.countBy(updateUsers, 'birthday')
}

getMenCountByYear(users);
//{ '1963': 1, '1973': 3, '1980': 2, '1999': 1, '2012': 1 }


//решение без использования lodash
const getMenCountByYear = (users) => {
  const mens = users.filter( ({gender}) => gender === 'male');
  const years = mens.map( ({birthday}) => {
      return birthday.slice(0,4)
  })
  const result = years.reduce((acc, item) => {
     acc.hasOwnProperty(item) ? acc[item] += 1 : acc[item] = 1;
     return acc
  },{})
 
  return result
 }
 
 getMenCountByYear(users);
