/*console.log(document.getElementsByTagName("h1"));

console.log(document.getElementById("text "));

console.log(document.getElementsByClassName("lista_exemplo"));

console.log(document.querySelector("#text"));
console.log(document.querySelector(".lista_exemplo"));
console.log(document.querySelector("h1"));

//Alterando o html
let newElement = document.createElement("p");
let texto = document.createTextNode("Algum texto");

newElement.appendChild(texto);

let elementAlvo = document.querySelector("#titulo-principal");
let fatherElement = document.querySelector("#container-principal");

fatherElement.insertBefore(newElement, elementAlvo);*/

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let p = document.querySelector("#text");
let pai = p.parentNode;

pai.appendChild(novoElemento);


