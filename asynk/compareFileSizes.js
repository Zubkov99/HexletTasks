import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Реализуйте асинхронную функцию compareFileSizes(), которая сравнивает размеры двух файлов 
// и передает результат сравнения в переданную callback-функцию. Если первый файл больше второго,
// то она передает единицу, если размеры равны, то ноль, иначе — -1.


//first decision
const compareFileSizes1 = (file1, file2, callback) => {
    fs.stat(path.join(dirname(fileURLToPath(import.meta.url)), file1), (_err1, data1) => {
      fs.stat(path.join(dirname(fileURLToPath(import.meta.url)), file2), (_err2, data2) => {
        const result = Math.sign(data1.size - data2.size)
        callback(null, result)
      })
    })
  }
  
//second decision
  const compareFileSizes2 = (filepath1, filepath2, cb) => {
    fs.stat(filepath1, (_error1, data1) => {
      fs.stat(filepath2, (_error2, data2) => {
        cb(null, Math.sign(data1.size - data2.size));
      });
    });
  };

