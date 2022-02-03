import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), 
// которая считает размер переданной директории не включая поддиректории. 
// Анализ размера файла должен происходить параллельно

//first decision
const getDirectorySize = (dir, callback) => {

    return fs.readdir(dir, (err, data) => {
      if (err) return callback(err);

      const fileList = data.map(item => path.join(dir, item));
      async.map(fileList, fs.stat, (error2, data) => {
        if (error2) {
          callback(error2);
          return;
        }
        const sum = _.sumBy(data.filter((item) => item.isFile()), 'size');
        callback(null, sum);
      });
    })
  }
  
//second decision
const getDirectorySize = (dir, callback) => {

    return fs.readdir(dir, (err, data) => {
      if (err) return callback(err);
  
      const getFileSizeInBytes = (file, cd) => {
        fs.stat(file, (err, data) => {
          if (err) return cd(err);
          if (!data.isFile()) return cd(err);
  
          cd(err, data.size)
        })
      }
  
      const fileList = data.map(item => path.join(dir, item));
      async.map(fileList, getFileSizeInBytes, (err, results) => {
        if (err) return callback(err)
        const filtredResults = _.without(results, undefined)
        return callback(err, _.sumBy(filtredResults))
      })
    })
  }


  getDirectorySize('lessons', (err, size) => {
    console.log(size);
  });