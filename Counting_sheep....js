//посчитаем овец
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let sheeps = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheeps += arrayOfSheep[i];
        }
    }
    return sheeps;
}

/* применение метода forEach() для перебора массива
function countSheeps(arrayOfSheep) {
    var count = 0;

    arrayOfSheep.forEach( function (sheep) {
        if (sheep)
            count++;
    });

    return count;
}*/
