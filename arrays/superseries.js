// Суперсерия Канада-СССР – это 8 товарищеских хоккейных матчей, 
// проводившихся между командами СССР и Канады в 72 (первая суперсерия) и в 74 годах 
// (вторая суперсерия). В этом задании вам предстоит написать функцию, которая вычисляет команду, 
// выигравшую суперсерию.


const superseries = (arr) => {

    let winsCanada = 0;
    let winsUssr = 0;

    for (const item of arr) {
        if(item[0] > item[1]) {
            winsCanada++
        } else if (item[0] < item[1]) {
            winsUssr++
        }
    }

    if(winsCanada > winsUssr) {
        return 'canada'
    } else if(winsCanada < winsUssr) {
        return 'ussr'
    }

    return null

}

superseries([
    [3, 7], // Первая игра
    [4, 1], // Вторая игра
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 5],
])
