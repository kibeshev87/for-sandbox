const quarterOf = (month) => {
    // Your code hereconst quarterOf = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <=6) {
        return 2
    } else if (month <=9) {
        return 3
    } else return 4;
    // Your code here
}
const quarterOf = m => Math.ceil(m/3);