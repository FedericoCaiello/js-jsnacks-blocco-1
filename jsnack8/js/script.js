// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
var numeroUtente = prompt('inserisci un numero di 4 cifre');
console.log(numeroUtente);
var somma = 0;
for (var i = 0; i < numeroUtente.length; i++) {
 somma = somma + parseInt(numeroUtente[i]);

}
console.log(somma);
