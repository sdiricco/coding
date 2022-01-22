/*
Fantacalcio

1 gol = 3 punti
1 assist = 1 punto

1) Calcola quanti punti hanno ottenuto i seguenti giocatori considerando che:

- Billy = 5 gol e 6 assist;
- Osvaldo = 7 gol e 2 assist
- Jonny = 3 gol e 10 assist

2) Stampare il risultato dei tre giocatori e chi ha ottenuto il punteggio più alto
*/

var punteggioGol = 3;
var punteggioAssist = 1;

var BillyGol = 5;
var BillyAssist = 6;

var OsvaldoGol = 7;
var OsvaldoAssist = 2;

var JonnyGol = 3;
var JonnyAssist = 10;

var BillyPunteggio = BillyGol*punteggioGol + BillyAssist*punteggioAssist;
var OsvaldoPunteggio = OsvaldoGol*punteggioGol + OsvaldoAssist*punteggioAssist;
var JonnyPunteggio = JonnyGol*punteggioGol + JonnyAssist*punteggioAssist;

console.log("Il punteggio di Billy è: " + BillyPunteggio);
console.log("Il punteggio di Osvaldo è: " + OsvaldoPunteggio);
console.log("Il punteggio di Jonny è: " + JonnyPunteggio);

if ( (BillyPunteggio === OsvaldoPunteggio) && (BillyPunteggio === JonnyPunteggio) ){
    console.log("Tutti hanno ottenuto lo stesso punteggio pari a: " + BillyPunteggio);
} else if ( (BillyPunteggio === OsvaldoPunteggio) && (BillyPunteggio > JonnyPunteggio) ) {
    console.log("Il punteggio più alto è quello di " + "Billy & Osvaldo e vale: " + BillyPunteggio);
} else if ( (OsvaldoPunteggio === JonnyPunteggio) && (OsvaldoPunteggio > BillyPunteggio) ) {
    console.log("Il punteggio più alto è quello di " + "Osvaldo & Jonny e vale: " + OsvaldoPunteggio);
} else if ( (BillyPunteggio > OsvaldoPunteggio) && (BillyPunteggio > JonnyPunteggio) ) {
    console.log("Il punteggio più alto è quello di " + "Billy e vale: " + BillyPunteggio);
} else if ( (OsvaldoPunteggio > BillyPunteggio) && (OsvaldoPunteggio > JonnyPunteggio) ) {
    console.log("Il punteggio più alto è quello di " + "Osvaldo e vale: " + OsvaldoPunteggio);
} else if ( (JonnyPunteggio > BillyPunteggio) && (JonnyPunteggio > OsvaldoPunteggio) ) {
    console.log("Il punteggio più alto è quello di " + "Jonny e vale: " + JonnyPunteggio);
} else {
    console.log("Error");
}

/*
Console:
---------------
Il punteggio di Billy è: 21
Il punteggio di Osvaldo è: 23
Il punteggio di Jonny è: 19
Il punteggio più alto è quello di Osvaldo e vale: 23
*/