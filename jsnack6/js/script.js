// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.
var numero = parseInt(prompt('inserisci un numero'));
for (var i = 1; i < numero; i++) {
  console.log(Math.pow(i, 3));
}
