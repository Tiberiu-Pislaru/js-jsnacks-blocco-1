// SNACK 5
// 1 creo tre variabili (let)
// 1a una lista vuota
// 1b 
let lista=[];
let num;
let sum= 0;

// 2 grazie a un do/while eseguo prima il blocco di comandi
// poi verifico se la condizione è vera
// 2a il if all'interno del 'do'
//  serve per controllare che la somma sia superiore a 50
// in caso contrario la variabile sum assume nuovamente il valore 0
// altrimenti succedeva che conservava il valore del ciclo prima
// per esempio se l'utente ci forniva 49 come primo numero  e 1 al secondo ciclo
// senza il 'if' la varibaile sum avrebbe avuto il valore 99
// quando in realtà la somma dei due elementi è di 50
do {
    num=parseInt(prompt('Ho bisogno di un numero'));
    lista.push(num);
    for(let i=0; i < lista.length; i++){
        sum+= lista[i];
    }
    if(sum < 50){
        sum = 0;
    }
} while (sum < 50);

// 3 stampo in console il valore di sum
console.log('La somma è di',sum);