function fakeBin(x){
    let arr_str = Array.from(x);
    let arr_num = arr_str.map(i => Number(i)); //массив цифр
    for (let i = 0; i < arr_num.length; i++) {
        if(arr_num[i] < 5) {
            arr_num[i] = 0;
        } else {
            arr_num[i] = 1;
        }
    }
    return arr_num.toString().replace(/,/g, '');
}
/*
function fakeBin(x) {
     return x.split('').map(n => n < 5 ? 0 : 1).join('');
 }*/
