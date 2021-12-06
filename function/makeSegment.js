// Отрезок — еще один графический примитив. В коде описывается парой точек, одна из которых — начало отрезка, 
// другая — конец. Обычный отрезок не имеет направления, 
// поэтому вы сами вольны выбирать то, какую точку считать началом, а какую концом.
// В этом задании подразумевается, что вы уже понимаете принцип построения абстракции и способны самостоятельно 
// принять решение о том, как она будет реализована. Напомню, что сделать это можно разными способами и нет одного правильного.

const makeDecartPoint = (x, y) => {
    const point = { x, y };
    return point;
  };

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);

const getX = (point) => point.x;  
const getY = (point) => point.y;
  
const makeSegment = (point1, point2) => {
    const segment = {
        start: point1,
        end: point2,
    };
    return segment;
}

const segment = makeSegment(beginPoint, endPoint);

const getMidpointOfSegment = (segment) => {
    const startX = getX(segment.start);
    const startY = getY(segment.start);
    const endX = getX(segment.end);
    const endY = getY(segment.end);

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    return {midX, midY}
}

const getBeginPoint = (segment) => {
    return segment.start
}

const getEndPoint = (segment) => {
    return segment.end
}




