// Evento básico usando método click
/*let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log("Clicou no botão");
});

//Removendo evento
let btn1 = document.querySelector("#btn");

function msg() {
    console.log("Clicou em mim (aula de remover elemento, não conta mais de um click após o tempo do setTimeout)")
}

btn1.addEventListener("click", msg);

setTimeout(function() {
    btn1.removeEventListener("click", msg);
}, 3000);*/

//Propagation and stopPropagation
/*let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e) {
    console.log("Clicou no botão 1");
    e.stopPropagation();
}

btn1.addEventListener("Click", msg);

btn2.addEventListener("Click", function(event) {
    console.log(event);
});

p.addEventListener("Click", function() {
    console.log("Clicou no paragrafo");
});*/

/*let a = document.getElementById("link");

a.addEventListener("Click", function(e) {

    e.preventDefault();

    console.log("Clicou mas não mudou o link");
});*/

//Eventos de tecla (Key event)
/*window.addEventListener("Keydown", function(e) {

    if(e.key == 'q') {
        console.log("Apertou a tecla da letra q");
    } else if (e.key == "Enter") {
        console.log("Apertou enter");
    }
});*/

/*let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function() {
    console.log("Apertou o botão");
});

btn1.addEventListener("mouseup", function() {
    console.log("Soltou o botão");
});

btn2.addEventListener("dblclick", function() {
    console.log("Clicou duas vezes");
});*/

/*-----mousemove
window.addEventListener("mousemove", function(e) {

    console.log(e.x);
    console.log(e.y);

});*/


//Evento por scroll 
/*
window.addEventListener("scroll", function(e) {

    if(window.pageYOffset > 1000) {
        console.log("Ativou");
    }

});*/

//Evento de foco
let input = document.querySelector("#input1");

input.addEventListener("focus", function() {
    console.log("Entrou no input");
});

input.addEventListener("blur", function() {
    console.log("Saiu do input");
});

//Evento de carregamento
window.addEventListener("load", function() {
    alert("Aceite os nosso termos de uso");
});

window.addEventListener("beforeunload", function(e) {
    event.returnValue = null;
});