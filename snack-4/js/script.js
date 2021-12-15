// SNACK 4
// 1 creiamo due variabili
// 1a variabile (let) num che prende valore (string) dall'utente
// 1b variabile (let) sum che avrà valore 0
let num = prompt('Ho bisogno di un numero');
let sum = 0;

// 2 creo un ciclo (while) che deve chiedere all'infinito, quasi, un numero composto da 4 cifre
// in caso il numero fornito non rispetti la condizione il ciclo continuerà
while (num.length !== 4 ){
    num = prompt('Il numero deve essere di 4 cifre');
}

// 3 tramite un ciclo for sommo le cifre della variabile num
for (let i = 0; i < num.length; i++) {
    
    sum += parseInt(num[i]);
    
}

// 4 stampo in console il risultato
console.log(sum);