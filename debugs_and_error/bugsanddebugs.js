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
    debugger;
}

for(let i = 5; i > 0; i--) {
    b++;
    a = a + c + 1;
    c += 2;
    debugger;
}

if(b == a) {
    a++;
} else {
    a = a + b + c;
}

debugger;

a = a * b;

debugger;