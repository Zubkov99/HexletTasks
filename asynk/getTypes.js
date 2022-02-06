import fsp from 'fs/promises';

// Реализуйте асинхронную функцию getTypes(), которая анализирует список переданных путей и возвращает массив (в промисе), 
// с описанием того, что находится по каждому из путей.
// Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения асинхронной операции возникла ошибка, 
// то значением для этого пути будет null. Для простоты считаем, что в эту функцию всегда передается как минимум один путь для обработки 
// (иначе придется задействовать механизм, который проходится в курсах далее).

const getTypes = (filePaths) => {
    const initPromise = Promise.resolve([]);
  
    const promise = filePaths.reduce((acc, path) => {
      const newAcc = acc.then((contents) =>
        fsp.stat(path)
        .then((data) => {
          if(data.isFile()) return contents.concat('file')
          if(data.isDirectory()) return contents.concat('directory')
        })
        .catch(() => contents.concat(null)));
      return newAcc;
    }, initPromise);
  
    return promise;
  }
  
  getTypes(['index.html', 'lessons', 'package.json', 'll']).then(console.log)
  // [ 'file', 'directory', 'file', null ]