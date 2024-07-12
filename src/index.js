const { fibs, fibsRec } = require('./fibonacci');

console.log("Iterative Fibonacci:");
console.log(fibs(8));
console.log(fibs(5));
console.log(fibs(2));
console.log(fibs(0));

console.log("\nRecursive Fibonacci:");
console.log(fibsRec(8));
console.log(fibsRec(5));
console.log(fibsRec(2));
console.log(fibsRec(0));