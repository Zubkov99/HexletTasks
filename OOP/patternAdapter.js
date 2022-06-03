// Адаптер – популярный шаблон проектирования. Он используется тогда, когда нужно использовать код, не поддерживающий необходимый интерфейс. В такой ситуации создается "обертка" над необходимым кодом, которая поддерживает нужный интерфейс. Это очень похоже на адаптеры электронных устройств в реальной жизни.
// В текущем задании, есть код, отвечающий за генерацию паролей. Он находится в классе PasswordBuilder. Для генерации паролей, этот класс использует внешний объект. Суть данного задания — внедрить в эту систему внешнюю библиотеку. Обратите внимание на то, что задача решается не через исправление кода самой библиотеки, а за счет создания адаптера, благодаря которому соединяется код задания и код библиотеки.

import generator from 'generate-password';
import crypto from 'crypto';

class PasswordBuilder {
    constructor(passwordGenerator) {
      this.passwordGenerator = passwordGenerator;
    }
  
    buildPassword(length = 8, options = ['numbers', 'symbols']) {
      const password = this.passwordGenerator.generatePassword(length, options);
      const digest = crypto.createHash('sha1').update(password).digest('hex');
  
      return { password, digest };
    }
  }
  
  class PasswordGeneratorAdapter {
      generatePassword(length, options) {
  
      const userOptions = options.reduce((sum, item) => {
        sum[item] = true;
        return sum;
      }, {});
      return generator.generate({
        length: length,
        uppercase: false,
        numbers: false,
        symbols: false,
        ...userOptions
      })
    }
  };
  
  const builder = new PasswordBuilder(new PasswordGeneratorAdapter());
  const passwordInfo = builder.buildPassword(10, ['uppercase','numbers', 'symbols']);