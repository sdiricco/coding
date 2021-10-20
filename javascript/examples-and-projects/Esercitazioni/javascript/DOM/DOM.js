const form = document.querySelector('#form');
const input = document.querySelector('#input');

input.addEventListener('keydown', logEvent);

function logEvent (e){
    console.log(e.type); //keydown Per ogni lettera che scrivo genera un evento immediatamente alla pressione
}

input.addEventListener('keyup', logEvent1);

function logEvent1 (e){
    console.log(e.type); //keyup Per ogni lettera che scrivo genera un evento al rilascio
}

input.addEventListener('keypress', logEvent2);

function logEvent2 (e){
    console.log(e.type); //keypress alcuni tasti non producono un evento come alt , shft
}

input.addEventListener('focus', logEvent3);

function logEvent3 (e){
    console.log(e.type); //focus genera un evento quando ci vado sopra con il focus
}

input.addEventListener('blur', logEvent4);

function logEvent4 (e){
    console.log(e.type); //blur genera un evento quando esco dal focus
}

input.addEventListener('cut', logEvent5);

function logEvent5 (e){
    console.log(e.type); //cut genera un evento quando taglio il contenuto Crtl + x
}

input.addEventListener('paste', logEvent6);

function logEvent6 (e){
    console.log(e.type); //paste genera un evento quando incollo il contenuto Crtl + v
}


console.log(NaN != NaN);
VM14:1 true
unde