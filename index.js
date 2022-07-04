console.log('start');

// 0.  Query

function sample(n) {
    console.log();
}

// sample() = ''


// 1.  Find the fibonacci series of n elements
function fibonacci(n) {
    const fib = [0, 1];

    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    console.log(fib);
}

// fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]
// fibonacci(7);


// 2.  Find the sum of n natural nos.
function sumOfN(n) {
    console.log((n*(n+1))/2);
}

// sumOfN(5) = 15
// sumOfN(5);


// 2.  Find the sum of n natural nos.
function sumOfN(n) {
    console.log((n*(n+1))/2);
}

// sumOfN(5) = 15
// sumOfN(5);


