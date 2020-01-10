// Crea un array vuoto.
var listaNumeri = [];

// Chiedi per 6 volte all’utente di inserire un numero
// se è dispari inseriscilo nell’array. CON FOR
for (var i=0; i<6; i++) {
  var numeroUtente = parseInt(prompt('inserisci un numero'));
  console.log(numeroUtente);
  if (numeroUtente%2 != 0){
    listaNumeri.push(numeroUtente);
    console.log(listaNumeri);
  }
}
