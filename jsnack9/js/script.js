// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi
// Oggi troverai una cosa dimenticata
// Ciò che è fatto è fatto
// Il buon giorno si vede dal mattino
// Sicuro di aver chiuso il gas?
// Chi semina vento raccoglie tempesta
// Il mattino ha l'oro in bocca
// Tanto va la gatta al lardo che ci lascia lo zampino

var frasi = ['Oggi troverai una cosa dimenticata', 'Ciò che è fatto è fatto', 'Il buon giorno si vede dal mattino', 'Sicuro di aver chiuso il gas?', 'Chi semina vento raccoglie tempesta', 'Il mattino ha l/oro in bocca', 'Tanto va la gatta al lardo che ci lascia lo zampino'];
var who = Math.floor((Math.random() * 100000) % frasi.length);
alert(frasi[who]);
console.log(frasi[who]);
