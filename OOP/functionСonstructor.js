// Point.js
// Реализуйте функцию-конструктор Point с двумя свойствами, представляющими координаты на 
// плоскости x и y и геттеры для извлечения этих свойств: getX и getY. 

// Segment.js
// Реализуйте функцию-конструктор Segment с двумя свойствами beginPoint и endPoint 
// и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.

// solution.js
// Реализуйте функцию, которая принимает на вход отрезок и возвращает новый отрезок с точками, 
// добавленными в обратном порядке (begin меняется местами с end).

// Точки в результирующем отрезке должны быть копиями (по значению)
// соответствующих точек исходного отрезка. То есть они не должны быть ссылкой на один 
// и тот же объект, так как это разные объекты (пускай и с одинаковыми координатами).

function getX() {
    return this.x   
};

function getY() {
    return this.y   
};

function getBeginPoint() {
    return this.beginPoint   
};

function getEndPoint() {
    return this.endPoint   
};

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX;
    this.getY = getY;
}

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
}

function reverse(segment) {
    const beginPoint = segment.getBeginPoint();
    const endPoint = segment.getEndPoint()
    const result = new Segment(beginPoint, endPoint);
    return result;
}

const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
const segment = new Segment(point1, point2);
const reversedSegment = reverse(segment);