// var , let , const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logName() {
    const name = "Leonardo"
    console.log(name)
}

const name = "Eduardo"

logName()

console.log(name)

// Arrow functions
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
    if(name) {
        return "Olá " + name + "!";
    } else {
        return "Olá!"
    }
}

console.log(greeting("Leonardo"));
console.log(greeting());

const testeArrow = () => console.log("testou!");

testeArrow()

const user = {
    name: "Dudu",
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    },
}

//user.sayUserName()
///user.sayUserNameArrow()

//Metodo Filter
const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumbers = arr.filter ((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users =  [
    {name: "Leo", available: true}, 
    {name: "Dudu", available: true}, 
    {name: "Carol", available: false},
    {name: "Vini", available: false}
]

const availableUsers = users.filter ((user) => user.available)
const notAvailableUsers = users.filter ((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

//   Map
const products = [
    {name: 'Camisa', price: 50.00, category: 'Roupas'},
    {name: 'Microondas', price: 450.00, category: 'Eletro'},
    {name: 'Tv', price: 1250.00, category: 'Eletro'},
    {name: 'Calça Jeans', price: 90.00, category: 'Roupas'},
]

products.map((product) => {
    if(product.category == 'Roupas') {
        product.onSale = true
    }
})

console.log(products)

// Template Literals
const userName = 'Nick'
const age = 3

console.log(`minha namorada tem um gato que se chama ${userName}, e tem ${age} anos`);

// Destructuring
const fruits = ["Maçã", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits

console.log(f1, f2, f3)

const productsDetails = {
    name: "Mouse",
    price: 40.00,
    category: "Periféricos",
    color: "Branca"
}

const {name: productName, price, category: productCategory, color} = productsDetails

console.log(`O nome do produto é ${productName}, ele custa R$ ${price}, pertence a categoria de ${productCategory} e é da cor ${color}`)

// Spread Operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = {name: 'Maverick'}
const carBrand = {brand: 'Chev'}
const otherInfos = {km: 100.000, price:150.000}

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)

// Classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount (discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product ("Camisa gola v", 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

const tenis = new Product("Tenis Azul", 120)

console.log(tenis.productWithDiscount(20))

//    Herança
class ProductWithAttributes extends Product {
    constructor (name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99 [
    "Preto",
    "Azul",
    "Verde"
    ])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors()