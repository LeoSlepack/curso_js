/* WHILE */
let x = 5;
let y =0;

while(x > 0) {
    console.log(x);
    x = x - 1;
}

while(y <= 10) {
    console.log(y);
    y = y + 1;
}

/* DO WHILE */
let u = 0;

do {
    console.log(u);
    u = u + 1;
} while ( u < 5);

/* FOR */
for (let numero = 2; numero < 100; numero = numero *2) {
    console.log("O numero é: " + numero)
}