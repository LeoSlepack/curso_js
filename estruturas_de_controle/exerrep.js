 EXERCICIOS 
let nome = (typeof "Leonardo");
let numero = (typeof 5);
let boleano =(typeof ( 5 > 2));

console.log(nome);
console.log(numero);
console.log(boleano);

CORRETO





let idade = prompt("Quantos anos você tem?");

if (idade >= 18) {
    console.log("Entrada liberada para festa.")
} else {
    console.log("Voê ainda não tem idade para entrar neste local.")
}

CORRETO 




const nome = "Leo"

if (nome == "Leo") {
    console.log("Olá Leo");
}

CORRETO 



const num1 = 2;
const num2 = 3;
const num3 = 18;

console.log(Math.pow(num1,2));
console.log(Math.pow(num2,2));
console.log(Math.pow(num3,2));

CORRETO 



let vel = 70;

if( vel > 80 ) {
    console.log("Você está acima da velocidade e tomará uma multa!")
} else {
    console.log("Parabéns, você está no limite correto de velocidade permitida!")
}

CORRETO 



let idade = 18
let cnh = false

if (idade >= 18 && cnh == false) {
    console.log("Você já tem idade para tirar a carteira de motorista!");
} else if (idade >= 18 && cnh == true) {
    console.log("Você já tem carteira de motorista!");
} else if (idade < 18 && cnh == false) {
    console.log("Você tem que esperar fazer no minimo 18 anos para tirar a carteira!");
} else {
    console.log("Nenhuma das alternativas");
}

CORRETO 



let n = 0;

while(n <= 10) {
    console.log(n);
    n = n + 1;
}

CORRETO 



for(let f = 100; f >= 50; f = f - 10) {
    console.log(f);
}

CORRETO 




for (let x = 0; x <= 50; x = x + 1) {
    
    if(x % 2 == 0) {
    console.log(`esse ${x} é par`);
    } else {
        console.log(`esse ${x} é impar`);
    }
}

CORRETO 



