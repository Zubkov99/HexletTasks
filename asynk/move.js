import fs from 'fs';

//  Написать асинхронную функцию, которая копирует содержимое первого файла во второй, а затем удаляет первый файл.

const move = (oldPath, newPath, callback) => {
    fs.readFile(oldPath, 'utf-8', (err1, data1) => {
      if(err1) return callback(err1)
      fs.writeFile(newPath, data1, (err2) => {
        if(err2) return callback(err2);
        fs.unlink(oldPath, callback)
      })
    });
  }
  
  move('index2.html', 'index.html', (error) => {
    if (error) {
      console.log('oops');
      return;
    }
    console.log('yes!')
  });
  