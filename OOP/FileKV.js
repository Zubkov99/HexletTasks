// Реализуйте и экспортируйте по умолчанию класс InMemoryKV, который представляет собой in-memory key-value хранилище. Данные внутри него хранятся в обычном объекте. Интерфейс этого класса совпадает с FileKV за исключением конструктора. Конструктор InMemoryKV принимает на вход объект, который становится начальным значением базы данных.
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход объект базы данных и меняет в нём ключи и значения местами.
// swapKeyValue — полиморфная функция, она может работать с любой реализацией key-value, имеющей такой же интерфейс.

import _ from "lodash";

class InMemoryKV {
    constructor(startPoint) {
      this.data = _.cloneDeep(startPoint);
    }
    get(key, defaultValue = null) {
    return _.get(this.data, key) ?? defaultValue
    }
    set(key, value) {
      this.data = {...this.data, [key]:value};
    }
    unset(key) {
     this.data = _.omit(this.data, key)
    }
    toObject() {
      return _.cloneDeep(this.data)
    }
  }
  
  const swapKeyValue = (map) => {
   const data = _.reduce(map.data, (result, value, key) => {
      map.unset(key)
      return{...result, [value]:key}
    }, {})
    map.data = {...data}
  }