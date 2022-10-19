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