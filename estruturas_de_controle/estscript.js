/* IF */
let idade = prompt("Quantos anos vc tem?")
let nome = prompt("Qual seu nome?");
let passaporte = false;

if(idade > 18) {
    console.log("Pode entrar");
}

if(nome == "Leonardo" && idade > 18) {
    console.log("Seu acesso é liberado!")
}

if((nome == "Leonardo" && idade > 18) || passaporte == true) {
    console.log("Você tem idade para viajar")
}

/* ELSE */
 if(nome == "Leonardo") {
    console.log("Seu nome é Leonardo");
 } else {
    console.log("Seu nome não é Leonardo");
 }

 let velocidade = 100;

 if(velocidade <= 80) {
    console.log("Não foi multado");
 } else {
    console.log("Você foi multado");
 }

 /* ELSE IF */
 let a = 5;
 let b = 3;

 if (a + b == 3) {
    console.log("O resultado é 3");
 } else if (a == 4) {
    console.log("O valor de a é 4");
 } else if (b == 3) {
    console.log("O valor de b é 3");
 } else {
    console.log("Nenhuma das alternativas acima");
}