function inverti() {
var parola =document.getElementById("check").value;
var paroladue='';
for (var i = 0; i < parola.length; i++){
paroladue = parola[i] + paroladue;
};
 if(parola ==""){
  document.getElementById('valutazione').innerHTML = "Inserisci una parola e poi avvia il controllo";
}
else if (parola== paroladue) {
  document.getElementById('valutazione').innerHTML = "La parola "+ parola + " è palindroma";
}
else if (parola!= paroladue){
  document.getElementById('valutazione').innerHTML = "La parola "+ parola + " non è palindroma";
}
else if(parola ==""){
  document.getElementById('valutazione').innerHTML = "Inserisci una parola e poi avvia il controllo";
}
}
