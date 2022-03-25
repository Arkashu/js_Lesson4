/*
let a = 0;
let result = a==0 ? 'Верно' : 'Не верно';
console.log(result);
*/

/*
let a = -2;
let result = a>0 ? 'Верно' : 'Не верно';
console.log(result);*/

/*

let a = 6;
let result = a<0 ? 'Верно' : 'Не верно';
console.log(result);
*/


/*let a = 0;
let result = a>=0 ? 'Верно' : 'Не верно';
console.log(result);*/

/*let a = 0;
let result = a<=0 ? 'Верно' : 'Не верно';
console.log(result);*/

/*let a = 'test';
let result = a=='test' ? 'Верно' : 'Не верно';
console.log(result);*/

/*let a = '1';
let result = a==='1' ? 'Верно' : 'Не верно';
console.log(result);*/

/*
let a = 4;
let result = a>0 && a<5 ? 'Верно' : 'Не верно';
console.log(result);*/

/*let a = 2;
if (a == 0 || a == 2){
    a += 7
}
else {
    a /=10
}
console.log(a);*/

/*let a = 1;
let b = 3;
let result;
if (a<=1 && b>=3){
    result = a+b;
}
else {
    result = a-b;
}
console.log(result);*/

/*let a = 12;
let b = 8;
let result;
if ((a>2 && a<11) ||b>=6 && b<14){
    console.log('Верно')
}
else {
    console.log('Не верно')
}*/

let num = 3;
let result;
switch (num){
    case 1: result = 'Зима'
        break;
    case 2: result = 'Весна'
        break;
    case 3: result = 'Лето'
        break;
    case 4: result = 'Осень'
        break;
    default: result = Error;
}
console.log(result)