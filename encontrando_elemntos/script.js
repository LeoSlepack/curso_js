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

/*let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let p = document.querySelector("#text");
let pai = p.parentNode;

pai.appendChild(novoElemento);*/


/*let lista = document.createElement('ul');

for(i = 0; i < 10; i++) {


    let item = document.createElement('li');

    let texto = document.createTextNode("texto lista" + i);

    
    item.appendChild(texto);

    
    lista.appendChild(item);

}

let container = document.getElementById('#container2');

container.appendChild(lista);*/

let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.udemy.com/course/javascript-do-basico-ao-avancado-com-node-e-projetos/learn/lecture/18155806#overview';

a.setAttribute('href', link);

console.log(a.getAttribute('href'));

// Conferindo widht e height
let elemento = document.querySelector('#titulo-principal');

console.log('largura: ' + elemento.offsetWidth); // considerando as bordas
console.log('altura: ' + elemento.offsetHeight); // considerando as bordas 

console.log('largura: ' + elemento.clientWidth); // não está considerando as bordas
console.log('altura: ' + elemento.clientHeight); // não está considerando as bordas 

//Posições dos elementos
let elemento1 = document.querySelector('#titulo-principal');

console.log(elemento1.getBoundingClientRect());

//Alterando css com js
let p = document.getElementById('text');

console.log(p.style);

p.style.color = 'red';

setTimeout(function() {
    p.style.color = 'blue';
    p.style.backgroundColor = 'black';
    p.style.height = '200px';
}, 2000);

// Selecionando varios elementos
let todosLi = document.querySelectorAll('li');

console.log(todosLi);

console.log(todosLi[0]);

