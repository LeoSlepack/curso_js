
let arr = [1, 4, 5, 6, 7];
let nomes = ['Leo', 'Leticia', 'Eduardo'];
let bool = [true, false, true];
let misturado = ['Leo', 1, true];

console.log(arr);
console.log(nomes);
console.log(bool);
console.log(misturado);


console.log(arr[4]);
console.log(nomes[0]);
console.log(bool[2]);
console.log(misturado[misturado.length -1]);


let marca = 'Nike';

console.log(marca.toUpperCase());

let marca2 = 'Nike';

console.log(marca2.toLowerCase());

let pessoa = {
    nome: "Leonardo",
    profissao: "Programador",
    idade: "23.5 anos",
}

console.log(pessoa.idade);
console.log(pessoa.profissao);
console.log(pessoa.nome);

let petsNames = {
    cachorro: "Rebeca",
    gato:"Nick",
    gata: "Nina and Jade"
}

console.log(petsNames.cachorro);
console.log(petsNames.gato);
console.log(petsNames.gata);

let car = {
    fabricante: "mercedes",
    modelo: "cla-200",
    cor: "branca",
}

delete car.cor;

console.log(car.cor);

car.hatch = true;

console.log(car.hatch);

let objetoA = {
    prop1: 'teste',
    prop2: 'testando',
}

let objetoB = {
    prop3: 'propriedade'
}

Object.assign(objetoA, objetoB);

console.log(objetoA);

Object.assign(objetoB, car);

console.log(objetoB);

console.log(Object.keys(car));
console.log(Object.keys(petsNames));
console.log(Object.keys(pessoa));

let num = [1,5,10,15,25];

for (let i = 0; i <= num.length; i++) {
    console.log(num[i]);
}


let sobrenome = ['Slepack', 'Maia', 'Boeira'];

for(let s = 0; s <= sobrenome.length; s++) {
    console.log(sobrenome[s]);
}