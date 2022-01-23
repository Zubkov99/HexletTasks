// Реализуйте в классе Truncater конструктор и метод truncate(). Метод принимает текст и следующие опции:
// separator - символ, заменяющий обрезанную часть строки
// length - максимальная длина исходной строки. Если строка короче, чем эта опция, то возвращается исходная строка.
// Конфигурацию по умолчанию можно переопределить через конструктор класса и вторым аргументом метода truncate(). Оба способа можно комбинировать.


class Truncater {
    static defaultOptions = {
      separator: '...',
      length: 200,
    };
    constructor(options = {}) {
        this.options = { ...this.constructor.defaultOptions, ...options };
    };
    truncate(text, options = {}) {
        const { length, separator } = { ...this.options, ...options };
        return text.length < length ? text : text.slice(0, length) + separator;
      }
  };

  const truncater = new Truncater({ 'length': 6 });
  console.log(truncater.truncate('one two', { 'separator': '.' }));
  console.log(truncater.truncate('one two', { 'length': '3' }));