//Counting Cards Подсчет карт
let count = 0;

function cc(card) {
    // Only change code below this line
    let bet = '';
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 7:
        case 8:
        case 9:
            count = count;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count --;
    }
    if (count <= 0) {
        bet = ' Hold';
    } else {
        bet = ' Bet';
    }
    return count + bet;
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');