// L’utente inserisce due numeri in successione, con due
// prompt.
var numeroUno = parseInt(prompt('inserisci un numero'));
console.log(numeroUno);
var numeroDue = parseInt(prompt('inserisci un altro numero'));
console.log(numeroDue);
// Il software stampa il maggiore.
if (numeroUno == numeroDue) {
  alert('hai inserito lo stesso numero');
  console.log(numeroUno);
}else if (numeroUno < numeroDue) {
  console.log(numeroDue);
}else {
  console.log(numeroUno);
}
