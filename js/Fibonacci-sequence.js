/**
 * Fibonacci equation:
 * Fn = Fn - 1 + Fn-2
 * Explanation:
 * At position of Fn, go to position -1 of Fn, then go to position -2 of Fn.
 * Add both positions to find the next position after Fn*/

//Fibonacci code gives you the first 2 positions of 0 & 1 because it has to be a positive number for it to occur in nature.
// So we start with a=0 and b=1, to find c:
let a = 0;
let b = 1;
let c;

for(let i =0; i<=50; i++){
    console.log(a+b)
    c = a+b; //Fn = (Fn-1) + (Fn-2)
    a = b; // the old b becomes the new a
    b = c; // the old c becomes the new b
}

//Fibonacci Series using Recursion
let n = 9;

// function returns the Fibonacci number
function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

console.log((fib(n)));

