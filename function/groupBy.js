// Реализуйте функцию для группировки объектов по заданному свойству. Функция принимает аргументами массив объектов и название свойства для группировки. Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными, подходящими для группы.

const students = [
    { name: 'Tirion', class: 'B', mark: 2 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Bronn', class: 'B', mark: 3 },
    { name: 'Sam', class: 'A', mark: 2 },
    { name: 'Aria', class: 'B', mark: 5 },
    { name: 'Keit', class: 'B', mark: 4 },
    { name: 'Rob', class: 'B', mark: 4 },
    { name: 'Taywin', class: 'A', mark: 5 },
  ];

//first solution
const groupByFirst = (data, parametr) => {
    const result = data.reduce((acc, user) => {

        if (! acc.hasOwnProperty(user[parametr])) {
            acc[user[parametr]] = [user]
        } else {
            acc[user[parametr]].push(user)
        }
        return acc
    }, {})
    return result
}

// groupByFirst(students, 'class');


//second solution
const groupBySecond = (objects, key) => objects.reduce((acc, object) => {
    const groupName = object[key];
    const group = acc[groupName] ?? []; 
    return { ...acc, [groupName]: group.concat(object) };
  }, {});

  groupBySecond(students, 'class')
