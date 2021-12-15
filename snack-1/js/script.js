// SNACK 1
// 1 creiamo una variabile (sum) che avrà il valore 0 inizialmente
let sum= 0;
// 2 creiamo il ciclo for con il contattore che deve arrivare fino a 10, partendo da 0
//  al suo interno chiediamo all'utente di dirci un numero,
// che sarà trasformato in un 'int' con parseInt
// poi aggiungiamo alla variabile sum il valore che ci fornirà l'utente
for(let i =0; i<10; i++){
    const num =parseInt(prompt('Dimmi un numero'));
    sum += num;
}
// 3 stampiamo in console la somma dei numeri che l'utente ci ha dato
console.log('La somma è di: ',sum)