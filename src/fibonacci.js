function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }
    return fibArray;
}

function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    let fibArray = fibsRec(n - 1);
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    return fibArray;
}

module.exports = { fibs, fibsRec };