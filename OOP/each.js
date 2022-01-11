// Реализуйте функцию, которая принимает на вход коллекцию объектов и колбек функцию. Эта функция
// должна вызывать колбек для каждого объекта коллекции. Главная особенность этой функции
//  в том, что она передает объекты коллекции не в саму функцию, а устанавливает их как контекст.

const each = (obj, callback) => {
    obj.map( (item) => {
        return callback.call(item)
    })
}
const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
  ];
each(objects, function callback() {
    this.name = this.name.split('').reverse().join('');
  });
   
console.log(objects);