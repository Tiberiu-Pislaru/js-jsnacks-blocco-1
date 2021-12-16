// SNACK 3
// for (let i = 1; i <= 1000; i++) {
    
//     console.log('La potenza è di: ',Math.pow(i, 2));
    
// }

let exp= 1;
let max = 1000;
let num= 2;

while(num ** exp < max){
    console.log(Math.pow(num, exp));
    exp++;

}