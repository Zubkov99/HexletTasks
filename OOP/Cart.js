// Реализуйте класс Cart, представляющий из себя покупательскую корзину. Интерфейс:
// addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
// getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
// getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается как стоимость всех добавленных товаров с учетом их количества.
// getCount – возвращает количество товаров в корзине

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item, count) {
      this.items.push({item, count})
    };
    getItems() {
        return this.items
    };
    getCost() {
       return this.items.reduce( (acc, item) => {
           console.log(item);
           return acc += item.item.price * item.count;
        }, 0)   
    };
    getCount() {
        return this.items.reduce( (acc, item) => {
            return acc += item.count;
         }, 0)  
    }
}

const cart1 = new Cart();
cart1.addItem({ name: 'car', price: 3 }, 5)
cart1.addItem({ name: 'house', price: 10 }, 2);
