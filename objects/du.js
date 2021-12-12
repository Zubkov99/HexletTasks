import _ from "lodash";

// Реализуйте функцию, которая принимает на вход директорию, и возвращает список вложенных узлов 
// (директорий и файлов), в указанную директорию на один уровень, и место которое, они занимают. 
// Размер файла задается в метаданных. Размер директории складывается из сумм всех размеров файлов, 
// находящихся внутри во всех поддиректориях. Сами директории размера не имеют.


const getCountSize = (data) => {
    if (data.type === 'file') {
        return data.meta.size;
    };

    const children = data.children;
    const sizeOfChildrens = children.map( item => {
        return getCountSize(item);
    })

    return _.sum(sizeOfChildrens);
};

const du = (tree) => {
    const children = tree.children;
    const result = children.map(child => [child.name, getCountSize(child)]);
    return result.sort(([, size1], [, size2]) => size2 - size1);
}




const data = {
  name: '/',
  type: 'directory',
  meta: {},
  children: [
    {
      name: 'eTc',
      type: 'directory',
      meta: {},
      children: [
        {
          name: 'NgiNx',
          type: 'file',
          meta: {size: 200},
        },
        {
          name: 'CONSUL',
          type: 'directory',
          meta: {},
          children: [{ name: 'test', type: 'file', meta: {size: 500} }],
        },
      ],
    },
    { name: 'hoSts', type: 'file', meta: {size: 1000500}, },
  ],
}


console.log(du(data));