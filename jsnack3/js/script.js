// Il software deve chiedere per 5 volte all’utente di inserire un
// numero.
// Il programma stampa la somma di tutti i numeri
// var somma = 0;
// for (var i=0; i<5; i++) {
//   var numero = parseInt(prompt('inserisci un numero'));
//   console.log(numero);
//   somma = somma + numero;
// }
// console.log(somma);

// inseriti. Esegui questo programma in due versioni, con il for

var somma = 0;
var i = 0;
while (i < 5){
  var numero =parseInt(prompt('inserisci un numero'));
  console.log(numero);
  somma = somma + numero;
  i++;
}
console.log(somma);
