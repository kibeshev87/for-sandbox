function enough(cap, on, wait) {
    // your code here
    let free = cap - on; //колличество свободных мест
    if (free >= wait) {
        return 0
    } else return wait - free
}

function enough(cap, on, wait) {
    // your code here
    let free = cap - on;
    return free >= wait ? 0 : wait - free
}