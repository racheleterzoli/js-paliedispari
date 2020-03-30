function haisceltopari(){
  alert ("Hai scelto pari! Let's play!");
  var utente = Math.round(Math.random()*5)+1;
  var computer = Math.round(Math.random()*5)+1;
  var somma=0;
  utente=utente*1;
  computer=computer*1;
  somma = utente + computer;
  console.log(utente);
  console.log(computer);
  console.log(somma);



  // if ((somma%2)=0){
  //   alert ("L'utente ha fatto " + utente + " mentre il pc ha fatto " + computer + ", quindi la somma è "+ somma +" ed è pari. HAI VINTO");
  // }
  // else {
  //     alert ("L'utente ha fatto " + utente + " mentre il pc ha fatto " + computer + ", quindi la somma è "+ somma +" ed è dispari. HAI PERSO");
  // }
};
function haisceltodispari(){
  alert ("Hai scelto dispari! Let's play!");
  var utente = Math.round(Math.random()*5)+1;
  var computer = Math.round(Math.random()*5)+1;
  var somma=0;
  utente=utente*1;
  computer=computer*1;
  somma = utente + computer;
  console.log(utente);
  console.log(computer);
  console.log(somma);

  // if ((somma%2)=1){
  //   alert ("L'utente ha fatto " + utente + " mentre il pc ha fatto " + computer + ", quindi la somma è "+ somma +" ed è dispari. HAI VINTO");
  // }
  // else {
  //     alert ("L'utente ha fatto " + utente + " mentre il pc ha fatto " + computer + ", quindi la somma è "+ somma +" ed è pari. HAI PERSO");
  // }
}
