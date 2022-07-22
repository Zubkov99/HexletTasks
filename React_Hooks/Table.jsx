// В этой задаче вам предстоит реализовать таблицу с возможностью сортировки по столбцам.
// В качестве данных передаётся список с объектами, данные передаются через props. Вам нужно вывести таблицу, в которой каждый столбец будет указывать на значение в объекте. Клик по заглавию столбца сортирует таблицу. При первом клике - сортировка по возрастанию, при втором - по убыванию. Сортировка выполняется только по одному столбцу. По умолчанию список выводится в том порядке, в котором пришёл. Сами объекты могут иметь любую плоскую структуру, это значит, что ключи у них могут быть другими.

import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const App = ({ list }) => {
  const [data, sortData] = useState([...list]);
  const [keysStorage, updateKeys] = useState({});

  const sorted = (key) => {
    const copyOfData = [...data];

    if (keysStorage[key] === 'secondType' || !keysStorage[key]) {
      updateKeys({ ...keysStorage, [key]: 'firstType' });
      copyOfData.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0
      })
      return copyOfData
    }

    if (keysStorage[key] === 'firstType') {
      updateKeys({ ...keysStorage, [key]: 'secondType' });

      copyOfData.sort((a, b) => {
        if (a[key] > b[key]) return - 1;
        if (a[key] < b[key]) return 1;
        return 0
      })
      return copyOfData
    }
  };

  const keys = Object.keys(data[0])
  const getRow = (item) => <tr key={item.id}>{Object.values(item).map((value) => (<td key={value}>{value}</td>))}</tr>;
  return (
    <Table>
      <thead>
      <tr>
          {keys.map((item) => <th key={item} onClick={() => sortData([...sorted(item)])}>{item}</th>)}
      </tr>
      </thead>
      <tbody>
        {data.map(getRow)}
        </tbody>
    </Table>
  )
};

export default App;
