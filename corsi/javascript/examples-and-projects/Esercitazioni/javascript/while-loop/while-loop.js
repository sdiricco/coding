//Esercizio 1

console.log("Esercizio 1 - Tabellina del 3");

var contatore = 3;

while (contatore <= 30) {
    console.log(contatore);
    contatore += 3;
}
/*
Console:
---------------
Esercizio 1 - Tabellina del 3
3
6
9
12
15
18
21
24
27
30
*/

//Esercizio 2

console.log("Esercizio 2 - Stampa i numeri pari fino a 15");

var numero = 1;

while (numero <= 15) {
    if ( !(numero % 2) ) {
        console.log(numero);
    }
    numero ++;
}

//Esercizio 3
console.log("Esercizio 3 - Stampa caratteri");

var parola = "ciao";

console.log(parola);

var contatore = 0;

while (contatore < parola.length) { // 0 < 4 // 1 < 4 // 2 < 4 // 3 < 4
    console.log(parola[contatore]); // c     // i     // a     // o
    contatore++;                    // 1     // 2     // 3     // 4
}

/*
Console:
---------------
Esercizio 3 - Stampa caratteri
ciao
c
i
a
o
*/
