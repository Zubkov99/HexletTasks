// Реализуйте и экспортируйте по умолчанию абстракцию "Деньги". 
// Она знает о валюте денег, позволяет их конвертировать в другие валюты, выполнять арифметические операции и форматировать вывод. Список методов:

// Money(value, currency = 'usd') – создает объект-деньги.
// Money.prototype.getValue() – возвращает стоимость в виде числа
// Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
// Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных и переданных денег, в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
// Money.prototype.format() – возвращает локализованное представление денег удобное для вывода

Money.prototype.getValue = function getValue() {
    return this.value
};

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
  };

Money.prototype.exchangeTo = function exchangeTo(currency) {

    if(this.currency === currency) return new Money(this.value, this.currency);

    if(currency === 'eur') {
        return new Money((this.value * 0.7), currency)
    }
    if (currency === 'usd') {
        return new Money((this.value * 1.2), currency)
    }
}

Money.prototype.add = function add(money) {
    if(this.getCurrency() === money.getCurrency()) {
        return new Money(this.value + money.getValue(), this.getCurrency());
    };
    const convertedMoney = money.exchangeTo(this.currency);
    return this.add(convertedMoney)
}

Money.prototype.format = function format() {
    if(this.currency === 'usd') return `$${this.getValue().toLocaleString(undefined, {minimumFractionDigits: 2})}`
    if(this.currency === 'eur') return `€${this.getValue().toLocaleString(undefined, {minimumFractionDigits: 2})}`
}

const money1 = new Money(100);
const money2 = new Money(200, 'eur');
const money3 = money2.add(money1);