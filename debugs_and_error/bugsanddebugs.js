//Strict Mode
//"use strict"

let opa = 'teste';
console.log("opa");

//dele Object.ptototype;

function teste() {
    "use strict"
    let testando = teste;
}

teste();

//false.prorp = "";
// "teste".prop = "";

//Debug com console.log
let a = 1;
let b = 2;
let c = 3;

if(c > a) {
    a = b;
    console.log(a);
}

for(let i = 5; i > 0; i--) {
    b++;
    a = a + c + 1;
    c += 2;
    console.log(a);
}

if(b == a) {
    a++;
} else {
    a = a + b + c;
}

console.log(a);

a = a * b;

console.log(a);

//Metodo debugger
if(c > a) {
    a = b;
    //debugger;
}

for(let i = 5; i > 0; i--) {
    b++;
    a = a + c + 1;
    c += 2;
    //debugger;
}

if(b == a) {
    a++;
} else {
    a = a + b + c;
}

//debugger;

a = a * b;

//debugger;

//Tratamento de inputs
/*function checarNumero(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
       alert("Por favor, passe apenas números para o programa.");
    } else {
        return number
    }
}

checarNumero(5);
checarNumero('gyhwfgsyhdgfyuhsd');

let number = prompt("Digite um número: ");

checarNumero(number);

//Exceptions
function saudacao(nome) {
    if(typeof nome != 'String') {
        throw new Error("O parâmetro nome precisa ser uma sting");
    } else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Leonardo");
saudacao(5);

console.log("pausa desfeita");*/

//Try and Catch and finally
let v = 5;

try {

    let o = 2 + v;

} catch(e) {

    console.log(e);

} finally {

console.log("Executou")

}

// Assertion
let arr = [1, 2, 3, 4, 5];
let arr1 = [];

function iterarArray(arr) {
    if(arr.length == 0) {
        throw new Error("O array precisa ter pelo menos um elemento")
    } else {
        for(let i = 0; i < arr.length; i ++) {
            console.log(i);
        }
    }
}

iterarArray(arr);
iterarArray(arr1);