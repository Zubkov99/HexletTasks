// В стандартной библиотеке Node.js есть класс fs.Stats. Объекты этого класса описывают собой файлы. С их помощью можно получать любую метаинформацию о файле. Реализуйте класс SmartFileInfo, наследующийся от FileInfo. Этот класс должен расширять поведение метода getSize. В новом классе этот метод принимает на вход аргумент, который обозначает единицу измерения возвращаемых данных. По умолчанию это b, то есть байты. Но можно передать и kb, то есть килобайты. В случае килобайтов, переопределённый метод делит байты на 1024 и получившееся значение возвращает наружу. Метод должен обрабатывать ситуацию, когда на вход поступает что-то другое, кроме указанных значений. Обработка сводится к возбуждению исключения Error.
import fs from 'fs';

class FileInfo {
    constructor(filePath) {
      this.filePath = filePath;
      this.fileStat = fs.statSync(filePath);
    }
  
    getSize() {
      return this.fileStat.size;
    }
  }

class SmartFileInfo extends FileInfo {
    constructor(filePath) {
      super(filePath);
    }
  
    getSize(measureUnit = 'b') {
      switch (measureUnit) {
        case 'b':
          return super.getSize()
        case 'kb':
          return super.getSize() / 1024
        default:
          throw new Error;
      }
    }
  }

const file = new SmartFileInfo(path.resolve('./index.html'));
console.log(file.getSize('kbb'));
