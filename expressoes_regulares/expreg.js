//Regex test
console.log(/testando/.test("ttttttestandooooooo"));
console.log(/testando/.test("testayaytdtfdtftfsyg"));

/*------------------------------------------------------------------------*/
const reg1 = new RegExp('caneta');

console.log(reg1.test("tem caneta? "));
console.log(reg1.test("Não tem"));

/*-----------------------------------------------------------------------*/
const reg2 = /caneta/;

let text = 'Tem caneta no estojo';

console.log(reg2.test("tem caneta? "));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("Onde hrehwrthjrttem utrhrthrtmquadradohtrhrthrthrt"));
console.log(/quadrado/.test("Onde tem um triângulo"));

//Conjunto de Caracteres
console.log(/[123]/.test("Existe 123 aqui?"));
console.log(/[0-9]/.test("O número 8 está presente aqui?"));
/*-------------------------------------------------------------------------------*/

const reg3 = /[12345]/;

console.log(reg3.test("Temos os número 6?"));
console.log(reg3.test("Temos os número 2?"));

/*-------------------------------------------------------------------------------*/
const reg4 = /[0-9]/;

console.log(reg4.test("Temos os número 60?"));

// Caracteres especiais

