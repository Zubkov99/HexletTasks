// Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект, включающий только указанные свойства.

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
  };

  const pickValues = (obj, targets) => {

    const result = {};

    const entries = Object.entries(obj);
    entries.map(([key, value]) => {
      if(targets.includes(key)) {
        result[key] = value;
      }
    })

    return result
  }

  pickValues(data, ['user', 'os']); 
  // { user: 'ubuntu', os: 'linux' }
