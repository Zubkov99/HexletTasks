import { URL } from 'url';

// Реализуйте класс для работы с HTTP-адресом. Класс должен содержать конструктор и методы:
// конструктор — принимает на вход HTTP-адрес в виде строки
// getScheme() — возвращает протокол передачи данных (без двоеточия)
// getHostName() — возвращает имя хоста
// getQueryParams() — возвращает параметры запроса в виде пар ключ-значение объекта
// getQueryParam() — получает значение параметра запроса по имени. Если параметр с переданным именем не существует, метод возвращает значение заданное вторым параметром (по умолчанию равно null)
// equals(url) — принимает объект класса Url и возвращает результат сравнения с текущим объектом — true или false

class Url {
  constructor(address) {
    this.url = new URL(address);
    this.searchParam = this.url.searchParams;
  }

  getScheme() {
    const protocol = this.url.protocol;
    return protocol.slice(0, protocol.length - 1)
  };
  getHostName() {
    return this.url.hostname;
  };
  getQueryParam(key, value = null) {
    return this.searchParam.get(key) ?? value;
  }
  getQueryParams() {
    return Object.fromEntries(this.searchParam)
  }
  equals(newUrl) {
    return this.toString() === newUrl.toString();
  }
}

const googleUrl = 'https://google.com:80?a=b&c=d&lala=value';
const url = new Url(googleUrl);
url.equals(new Url('https://google.com:80?a=b&c=d&lala=value'))