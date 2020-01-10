// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.
var nomi = ['marco', 'nino', 'fede', 'lollo'];
console.log(nomi);
// chiedi all’utente il suo nome
var nomeInvitato = prompt('il tuo nome');
console.log(nomeInvitato);
//comunicagli se può partecipare o no alla festa.
var invitato = false;
for (var i=0; i<nomi.length; i++) {
  console.log(nomi[i]);
  if (nomi[i] == nomeInvitato) {
    invitato = true;
    console.log('puoi entrare');
  } else {
    console.log('non puoi entrare non sei un invitato');
  }
}
console.log(invitato);
