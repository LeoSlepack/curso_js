// Callbacks
console.log("1");

setTimeout(function() {
    console.log("5");
}, 2000);

console.log("2");
console.log("3");
console.log("4");

//Promises
let promessa = Promise.resolve(4 + 8);

console.log('Algum código');

promessa.then((value) => console.log(`A soma é ${value}`));

/*---------------------------------------------------------------------------------*/

let p = Promise.resolve(5);

console.log("outros códigos");

console.log(p);

p.then((value) => (console.log(`o valor é ${value}`)));

//Resolvendo varias Promises
const t1 = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve(100);
    },2500);
})

const t2 = Promise.resolve(5);

const t3 = new Promise(function(resolve, reject) {
    resolve(10);
});


Promise.all([t1, t2, t3]).then((values) => console.log(values));

// Async functions
async function somar (l,e) {
    return l + e;
}

somar (2,2).then(function(value) {
    console.log(value);
});



