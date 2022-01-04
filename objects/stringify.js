// Реализуйте функцию, похожую на JSON.stringify(), но со следующими отличиями: ключи и строковые 
// значения должны быть без кавычек; строчка (линия) в строке заканчивается самим значением, без запятой.
// stringify(value[, replacer[, spacesCount]])


//Первое решение
const stringify1 = (obj, replacer = ' ', spacesCount = 1) => {

    if(typeof obj != 'object') return obj.toString();
  
    const counter = spacesCount;
  
      const toString = (data, spacesCount) => {
          let objString = '';
          objString += '{\n';
  
          for (const key in data) {
       
              const value = data[key];
              objString += `${replacer.repeat(spacesCount)}${key}: `;
              
              if (typeof value === 'object') {               
                  objString += `${toString(value, spacesCount + counter)}${replacer.repeat(spacesCount)}`;
                  objString += '}\n'
  
              } else {
                  objString += `${value}\n`;
              }
          }
          return objString;
      }
     return  `${toString(obj, spacesCount)}}`
  }
  
  // Второе решение
  const stringify2 = (value, replacer = ' ', spacesCount = 1) => {
    const iter = (currentValue, depth) => {
      if (typeof currentValue !== 'object') {
        return currentValue.toString();
      }
  
      const indentSize = depth * spacesCount;
      const currentIndent = replacer.repeat(indentSize);
      const bracketIndent = replacer.repeat(indentSize - spacesCount);
      const lines = Object
        .entries(currentValue)
        .map(([key, val]) => {
          console.log([key, val]);
          return `${currentIndent}${key}: ${iter(val, depth + 1)}`
        });
  
      return [
        '{',
        ...lines,
        `${bracketIndent}}`,
      ].join('\n');
    };
  
    return iter(value, 1);
  };
  
  
  const nested = {
    string: 'value',
    boolean: true,
    number: 5,
    float: 1.25,
    object: {
      5: 'number',
      1.25: 'float',
      null: 'null',
      true: 'boolean',
      value: 'string',
      nested: {
        boolean: true,
        float: 1.25,
        string: 'value',
        number: 5,
        null: 'null',
      },
    },
  };
  
  stringify1(nested, '.', 2);
  stringify2(nested, '.', 2);  