const frutas = ['banana', 'manzana', 'pera'];

frutas[0] = 'durazno';
frutas[1] = 'sandia';

console.log(frutas);

let a, b, c, d;
[a, b, c, d] = [5, 10 , 15 ,20];

console.log(a);
console.log(b);
console.log(c);

let z, x, rest;
[z, x, ... rest] = [1, 2, 3, 4, 5, 6, 7];

console.log(z);
console.log(x);
console.log(rest);

const lenguajes = ['python', 'javascript', 'php', 'java'];
let [len1, len2, len3] = lenguajes;

console.log(len1);
console.log(len2);
console.log(len3);