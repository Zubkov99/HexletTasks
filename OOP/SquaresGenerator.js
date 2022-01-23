// Реализуйте класс Square для представления квадрата. У квадрата есть только одно свойство — сторона. Реализуйте метод getSide(), возвращающий значение стороны.
// Реализуйте класс SquaresGenerator со статическим методом generate(), принимающим два параметра: сторону и количество экземпляров квадрата (по умолчанию 5 штук), которые нужно создать. Функция должна вернуть массив из квадратов. Экспортируйте класс по умолчанию.

class Square {
    constructor(side) {
      this.side = side;
    }
    getSide() {
      return this.side;
    }
  }

  class SquaresGenerator {
    static generate(side, copy) {
      const result = [];
      for(let i = 0; i < copy; i++) {
        result.push(new Square(side))
      }
      return result
    }
  }

  const square = new Square(10);
  console.log(square.getSide());

  const squares = SquaresGenerator.generate(4,5);
  console.log(squares);
