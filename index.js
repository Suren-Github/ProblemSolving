// 0.  Query

function sample(n) {
    console.log();
}

// sample() = ''


// 1.  Find the fibonacci series of n elements
function fibonacci(n) {
    const fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log(fib);
}

// fibonacci(7); // [0, 1, 1, 2, 3, 5, 8]
// Complexity: O(n) 

// 2.  Find the sum of n natural nos.
function sumOfN(n) {
    console.log((n * (n + 1)) / 2);
}

// sumOfN(5); // 15
// Complexity: O(1) 


// 2.  Find the factorial of n
function factorial(n) {
    let fact = 1;
    for (i = n; i > 0; i--) {
        fact *= i;
    }
    console.log(fact);
    return fact;
}

// factorial(5); // 120
// Complexity: O(n)


// 3.  Primality of natural number n
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(1)) // false
// console.log(isPrime(2)) // true
// console.log(isPrime(5)) // true
// console.log(isPrime(4)) // false
// Complexity: O(n)


// 4.  Power of 2

function isPowerOf2(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2; 
    }
    return true;
}

console.log(isPowerOf2(2)) // true
console.log(isPowerOf2(3)) // false
console.log(isPowerOf2(4)) // true
console.log(isPowerOf2(5)) // false
// Complexity: O(log n)