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

// Regex com operador not
const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("b"));
console.log(notab.test("Aqui tem a e b, mas aceita pq ele so barra quando estão isolados"));
/*---------------------------------------------------------------------------*/

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("asd"));
console.log(nottoaz.test("123"));
console.log(nottoaz.test("123 asd"));
console.log(nottoaz.test("djhgvdfvbghdgbjvdbhvbhdbvfhj"));

//Regex com operador plus +
const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("123454152352415"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("kdnvjdfbjhvbfdhjbvhjfdb"));
console.log(umOuMaisNumeros.test("111111111111"));

//Regex com operador question ou "?"
const padrao = /Abacax?i/;

console.log(padrao.test("Abacai"));
console.log(padrao.test("Abacaxi"));

//Regex com operador de precisão
const cep = /\d{5}-\d{3}/;

console.log(cep.test("83730-170"));
console.log(cep.test("83730--170"));
console.log(cep.test("jvegwvgh"));
console.log(cep.test("84465454"));

//Regex com método exec
let teste1 = /\d+/

console.log(teste1.exec("Tem o número 100 aqui"));
console.log(teste1.exec("Tem o número aqui"));

//Choice pattern
let frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));

//Regex para validar um domínio
let validarDominio = /www.\w+\.com|com.br/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.teste"));
console.log(validarDominio.test("teste.com"));
console.log(validarDominio.test("www.octolegal.com"));

//Regex validando data de nascimento
let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("teste@gmail.com"));
console.log(validarEmail.test("teste@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("testwbdhjwebvfhje@gmail.com"));