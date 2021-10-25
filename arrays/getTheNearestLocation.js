//Найти ближайшую к точке локацию


const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };



const getTheNearestLocation = (location, point) => {

    if(location.length == 0 ) {
        return null
    }

    let test = [];
    location.map((item, index)=> {

        let distance = getDistance(item[1], point)
        if(index === 0) {
            test.push(distance, index)
        }
        if(test[0] > distance) {
            test = [distance, index]
        }
    })


    return location[test[1]]
}

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
  ];
   
  const currentPoint = [5, 5];

  getTheNearestLocation(locations, currentPoint)
