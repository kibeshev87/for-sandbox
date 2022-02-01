//поторение строки в одну строку
function repeatStr (n, s) {
    let a = [];
    while (a.length < n) {
        a.push(s);
    }
    return a.join("");
}
//применение метода repeat();
function repeatStr (n, s) {
    let str = s.repeat(n);
    return str;
}