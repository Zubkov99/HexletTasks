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

    let result = [];
    location.map((item, index)=> {

        let distance = getDistance(item[1], point)
        if(index === 0) {
            result.push(distance, index)
        }
        if(result[0] > distance) {
            result = [distance, index]
        }
    })


    return location[result[1]]
}

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
  ];
   
  const currentPoint = [5, 5];

  getTheNearestLocation(locations, currentPoint)
