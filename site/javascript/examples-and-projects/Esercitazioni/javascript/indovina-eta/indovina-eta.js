var etaBilly = 50;

/* Attenzione!! Dal prompt si ricevono solo stringhe quindi è necessario convertire tale stringa in numero tramite la funzione Number()  */
var inputUtente = Number(prompt("quanti anni ha Billy?"));

if (inputUtente === etaBilly) {
    alert("hai indovinato");
} else if ( (inputUtente > etaBilly) ) {
    alert("Numero troppo alto, riprova");
} else if ( (inputUtente < etaBilly) ) {
    alert("Numero troppo basso, riprova");
} else {
    alert("Error");
}