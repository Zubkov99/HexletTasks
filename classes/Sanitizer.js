// В программировании часто встречается задача очистки текста от мусора или потенциально опасных частей, например HTML-тегов. В JS для такой очистки подходит функция trim, убирающая концевые пробелы.
// Создайте класс Sanitizer, содержащий метод sanitize(text). Он должен отрезать концевые пробелы и возвращать результат наружу.
// Создайте класс (декоратор) SanitizerStripTagsDecorator. Он принимает в конструктор исходный санитайзер и дополнительно к его логике, выполняет очистку текста от тегов. Очистка текста от тегов должна идти раньше чем отрезание концевых пробелов.

import cheerio from 'cheerio';

class Sanitizer {
    sanitize(str) {
      return str.trim()
    }
  }
  
  const stripTags = (tagString) =>  cheerio.load(tagString).text();
  
  class SanitizerStripTagsDecorator {
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
    }
    sanitize(text) {
      const withoutHtml = stripTags(text);
      return this.sanitizer.sanitize(withoutHtml)
    }
  }
  
  
  class Application {
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
    }
  
    run(text) {
      return this.sanitizer.sanitize(text);
    }
  }
  
    const sanitizer = new Sanitizer();
    const decorated = new SanitizerStripTagsDecorator(sanitizer);
    const app = new Application(decorated);
    console.log(app.run('<p>text<p>'));
  