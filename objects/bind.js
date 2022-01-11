// Функции bind(), apply() и call() работают с контекстом и аргументами. 
// В этом упражнении вы научитесь заменять одну функцию другой для получения функциональности,
// аналогичной bind().

// первое решение 
const bind = (obj, fn) => {
    return (...rest) =>  fn.apply(obj, rest)
}

// Альтернативное решение 
const bind2 = (context, fn) => (...args) => fn.call(context, ...args);

const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};

bind(obj, fn)

const fnWithContext = bind(obj, fn);
console.log(fnWithContext(3,2))