let cachorro = {
    latir: function() {
        console.log("AU  AU");
    }
}

cachorro.latir();

let pessoa = {
    leo: function() {
        console.log("Leonardo, 23.5 anos, programador e estudante.")
    },

    leticia: function() {
        console.log("Leticia, 24 anos, vendedora e estudante de biomedicina.")
    }
}

pessoa.leo();
pessoa.leticia();

let dog = {
    raca: 'Labrador',
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

console.log(dog.raca);

dog.setRaca('Pastor Alemão');
console.log(dog.raca);

console.log(dog.getRaca());

const person = {
    maos: 2,
}

console.log(Object.getPrototypeOf(person));

let gato = {
    patas: 4,
    raca: 'SRD',
    miar: function() {
        console.log("Miauuuu");
    }
}


let nina = Object.create(gato);

nina.miar();

nina.raca = "vira-lata";

console.log(nina.raca);
console.log(gato.raca);

function criarCachorro (raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criarCachorro('Doberman', 4, 'preta');

console.log(doberman);

function Passarinho (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.cantar = function() {
        console.log("FI FI FIU");
    }
}

let sabia = new Passarinho('Sabia', 2, 'Marrom');
console.log(sabia);
sabia.cantar(); 

