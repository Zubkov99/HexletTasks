import fs from 'fs/promises';

// Реализуйте и экспортируйте асинхронную функцию reverse(), которая изменяет порядок 
// расположения строк в файле на обратный. Функция должна перезаписать файл.

const reverse = (file) => {
    return  fs.readFile(file, 'utf-8')
      .then(data => data.split('\n'))
      .then(data => data.reverse().join('\n'))
      .then((data) => fs.writeFile(file, data))
    }
    reverse('test.txt')