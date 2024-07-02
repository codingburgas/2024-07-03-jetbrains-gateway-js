// Fibonacci function
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate random Fibonacci number
function generateFibonacci() {
    const randomN = Math.floor(Math.random() * 35) + 1;
    const fibNumber = fibonacci(randomN);
    document.getElementById("output").innerText = `Randomly generated n: ${randomN}\nFibonacci number at position ${randomN}: ${fibNumber}`;
}
