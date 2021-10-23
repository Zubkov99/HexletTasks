// Реализуйте и экспортируйте по умолчанию функцию, 
// которая принимает на вход в виде массива кошелёк с деньгами и название валюты и 
// возвращает сумму денег указанной валюты.
// Реализуйте данную функцию используя управляющие инструкции.


const getTotalAmount = (arr, str) => {
    let result = 0;

    for (const item of arr) {
        if(!item.match(str)) {
            continue
        } else {
            result += +item.slice(str.length).trim();
        }
    }

    return result
}


const money2 = [
    'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
  ];
  getTotalAmount(money2, 'eur') // 135