const { fibs, fibsRec } = require('./fibonacci');
const mergeSort = require('./mergeSort');

function main() {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.log("Usage: node dist/main.js <operation> <arguments>");
        console.log("Operations: fib, merge");
        console.log("Examples:");
        console.log("  node dist/main.js fib 8");
        console.log("  node dist/main.js merge 3 2 1 13 8 5 0 1");
        return;
    }

    const operation = args[0];
    const operationArgs = args.slice(1);

    switch (operation) {
        case 'fib':
            handleFibonacci(operationArgs);
            break;
        case 'merge':
            handleMergeSort(operationArgs);
            break;
        default:
            console.log("Unknown operation. Use 'fib' or 'merge'.");
    }
}

function handleFibonacci(args) {
    if (args.length !== 1) {
        console.log("Fibonacci operation requires one argument.");
        return;
    }

    const n = parseInt(args[0]);
    if (isNaN(n) || n < 0) {
        console.log("Please provide a valid non-negative integer for Fibonacci.");
        return;
    }

    console.log(`Generating Fibonacci sequence for n = ${n}`);
    console.log("\nIterative Fibonacci:");
    console.log(fibs(n));
    console.log("\nRecursive Fibonacci:");
    console.log(fibsRec(n));
}

function handleMergeSort(args) {
    const arr = args.map(Number);
    if (arr.some(isNaN)) {
        console.log("Please provide valid numbers for merge sort.");
        return;
    }

    console.log("Original array:", arr);
    console.log("Sorted array:", mergeSort(arr));
}

main();