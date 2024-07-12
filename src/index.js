const { fibs, fibsRec } = require('./fibonacci');

const n = parseInt(process.argv[2]) || 8;  // Default to 8 if no argument is provided

console.log(`Generating Fibonacci sequence for n = ${n}`);

console.log("\nIterative Fibonacci:");
console.log(fibs(n));

console.log("\nRecursive Fibonacci:");
console.log(fibsRec(n));