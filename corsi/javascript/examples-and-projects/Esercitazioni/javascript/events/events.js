var h2 = document.querySelector("h2");
var btn = document.querySelector("button");
var a = document.querySelector("a");

function cambiaColore_h2(){
    h2.classList.toggle("blueColor");
}

function textMouseOverIn(){
    a.classList.add("classOver");
}

function textMouseOverOut(){
    a.classList.remove("classOver");
}



btn.addEventListener("click", cambiaColore_h2);
a.addEventListener("mouseover", textMouseOverIn);
a.addEventListener("mouseout", textMouseOverOut);