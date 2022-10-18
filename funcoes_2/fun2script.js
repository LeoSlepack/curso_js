
function imprimirNoConsole() {
    console.log("Hello World!");
}

imprimirNoConsole();

function imprimirUmNumero(num){
    console.log("O numero é " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(8);

/*---------------------------------------------------------------------------------------*/

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

/*-------------------------------------------------------------------------------------*/

function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de mult é " + mult);

/*----------------------------------------------------------------------------------------*/

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir!");
    } else {
        console.log("Não pode dirigir!")
    }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(17, false));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));

/*----------------------------------------------------------------------------------------------*/

let consoleTeste = () => {
    console.log("Olá Mundo!");
};

consoleTeste();
/*------------------------------------------------------------------------------------------------------*/

let soma = (a,b) => {
    return a + b;
};

console.log(soma(10,20));
/*----------------------------------------------------------------------------------------------------------*/

let raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(10));

/*-----------------------------------------------------------------------------------------------------------*/

function mais(c, d) {

    if(c === undefined || d === undefined) {
        console.log("Esta função precisa ter os dois argumentos para ser validada.");
    } else {
        return c + d;
    }
}

console.log(mais(1));

console.log(mais(1,2));

/*--------------------------------------------------------------------------------------------------------------------*/

/*    EXERCICIOS   */
/*   1   */

function imprimirHelllo () {
    console.log("Olá Mundo!");
};

imprimirHelllo();

/*     2   */

function recebaIdade(idade) {
    console.log("A sua idade é de " + idade + "anos")
};

recebaIdade(23);

/*    3    */

function somando (num1,num2) {
    return num1 + num2; 
};

console.log(somando(10,10));



