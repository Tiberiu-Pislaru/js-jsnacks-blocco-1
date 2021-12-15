// SNACK 2
// 1 chiediamo all'utente di fornirci un numero che sarà salvato in una variabile
const num = parseInt(prompt('Può fornirci un numero?'));

// 2 tramite un for calcoliamo il cubo dei primi N numeri
// successivamente lo stampiamo in console
for (let i = 1; i <= num; i++) {
    const cubo = Math.pow(i, 3);
    console.log('Il valore cubico è di: ',cubo);
    
}