//Esercizio 1
console.log("Esercizio 1");
var lettere = ["a", "b", "c", "d", "e", "f", "g"];
console.log(lettere);
console.log( lettere[lettere.length - 1] );

/*
Console:
---------------
Esercizio 1
["a", "b", "c", "d", "e", "f", "g"]
g
*/

//Esercizio 2 Matrix
console.log("Esercizio 2");
var social = [
    ["facebook", "instagram"],
    ["whatsapp", "telegram"],
    ["tiktok", "snapchat"],
];
console.log(social);
console.log(social[1][1]);
console.log(social[2][0]);

/*
Console:
---------------
Esercizio 2

(3) [Array(2), Array(2), Array(2)]
0: (2) ["facebook", "instagram"]
1: (2) ["whatsapp", "telegram"]
2: (2) ["tiktok", "snapchat"]
length: 3
__proto__: Array(0)

telegram
tiktok
*/