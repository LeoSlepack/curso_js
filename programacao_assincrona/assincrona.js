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