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
for (let numero = 2; numero < 100; numero = numero * 2) {
    console.log("O numero é: " + numero)
}

/* BREAK */
for(let i = 5; i < 10; i = i + 1) {
    if( 1 % 10 == 0){
        console.log("Saiu do loop");
        break;
    }
    console.log("Prosseguindo com o loop");
}

/* CONTINUE */
for( let t = 10; t > 0; t = t - 1) {

        if( t % 2 == 0) {
            console.log("Caiu no continue");
            continue;
        }

        console.log(t);
}

/* INCREMENTAR A VARIAVEL */
let n = 5;

while( n < 50 ) {

    console.log(n);

    n += 10;
}

for(let c = 0; c < 10; c++) {
    console.log("O c é " + c);
}

for(let c = 10; c > 0; c--) {
    console.log("O c é " + c);
}

