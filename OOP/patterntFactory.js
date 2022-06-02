// Создайте фабрику, которая принимает на вход путь до файла конфигурации в формате либо json либо yaml и возвращает объект класса Config. Конструктор класса Config принимает на вход объект с данными, полученными из конфигурационных файлов и предоставляет к нему доступ с помощью метода getValue.
// Учтите что файлы формата YAML могут иметь разные расширения: yaml и yml. Фабрика должна работать с обоими.

import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

class Config {
    constructor(data = {}) {
      this.data = data;
    }
  
    getValue(key) {
      const result = this.data[key];
      if (result instanceof Object) {
        return new Config(result);
      }
      return result;
    }
}

class ConfigFactory {
    static factory(filePath) {
  
      const mapping = {
        'json': JsonParser,
        'yaml': YamlParser,
        'yml': YamlParser,
      };
  
      const extname = path.extname(filePath).slice(1);
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const className = mapping[extname];
      const data = new className(rawData);
      return new Config(data.getParsing());
    };
};

class JsonParser {
    constructor(data) {
      this.data = data;
    };

    getParsing() {
     return JSON.parse(this.data)
    };
};

class YamlParser {
    constructor(data) {
      this.data = data;
    };

    getParsing() {
      return yaml.load(this.data)
    };
};

export default ConfigFactory