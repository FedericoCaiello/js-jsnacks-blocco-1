// L’utente inserisce due parole in successione, con due
// prompt.
var parolaUno = prompt('inserisci una parola');
console.log(parolaUno);
var parolaDue = prompt('inserisci la seconda parola');
console.log(parolaDue);

 // Il software stampa prima la parola più corta, poi la
// parola più lunga.

if (parolaUno.length == parolaDue.length) {
  console.log(parolaUno);
}else if (parolaUno.length > parolaDue.length) {
  console.log(parolaDue + ' ' + parolaUno);
}else {
  console.log(parolaUno + ' ' + parolaDue);
}
