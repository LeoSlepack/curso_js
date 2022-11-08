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

