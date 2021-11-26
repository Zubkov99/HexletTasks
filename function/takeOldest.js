import _ from 'lodash';

// Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых. 
// Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице. 
// Экспортируйте данную функцию по умолчанию.

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Alex', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

//shortsolution
const takeOldest = (users, count = 1) => {
    const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday)); 
    return sorted.slice(0, count);
  };

takeOldest(users, 2);


//longsolution
const takeOldestLong = (users, numberOfUsers = 1) => {
    
    const parsedBirthday = users.map(item => {
        item.birthday = new Date(item.birthday);
        return item;
    });

    const result = _.sortBy(parsedBirthday, 'birthday')
    .slice(0,numberOfUsers)
    .map( item => {
        const options = {month: 'short', day: 'numeric', year: 'numeric'};
        item.birthday = item.birthday.toLocaleDateString('en-US', options);
        return item;
    })

    return result
};
