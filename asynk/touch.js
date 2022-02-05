import fsp from 'fs/promises';

// Реализуйте асинхронную функцию touch(), которая создаёт файл, если его не существует.

const touch = (file) => {
    return fsp.access(file)  
    .catch( () => fsp.writeFile(file, ''))
   }
  
  touch('tests/test.txt')