// Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.

/** if (condition){
    // executed only if "condition" is true
} else if (other condition){
    // executed only if "condition" was false and "other condition" is true
} else {
    // executed only if both "condition" and "other condition" were false
}
 */
function fizzBuzz() {
    let result = "";
    for (let n = 1; n <= 50; n++) {
        if (n % 15 === 0) {
            console.log("Fizzbuzz")
        } else if (n % 5 === 0) {
            console.log("buzz")
        } else if (n % 3 === 0) {
            console.log("fizz")
        } else {
            console.log(n)
        }
    }
    return result;
}

console.log(fizzBuzz());


/** As an ARRAY [] **/

function fizzBuzzArr() {
    var array = [];
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            array.push("FizzBuzz");
        } else if (i % 3 === 0) {
            array.push("Fizz");
        } else if (i % 5 === 0) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    return array;
}

console.log(fizzBuzzArr());


/** Switch Statement**/

function fizzBuzzSwitch() {
    let resultSwitch = "";
    for (let n = 1; n <= 50; n++) {
        switch (true) {
            case n % 5 === 0 && n % 3 === 0:
                console.log("FizzBuzz");
                break;
            case n % 5 === 0:
                console.log("Buzz");
                break;
            case n % 3 === 0:
                console.log("Fizz");
                break;
            default:
                console.log(n)
        }
    }
    return resultSwitch;
}

console.log(fizzBuzzSwitch());

/**
 switch (true){ //Switch statement if the condition is True (similar to if statement)
    case x: //(else if)
        code block;
        break;
    case y: //(else if)
        code block;
        break;
    case z: //(else if)
        code block;
        break;
    default: //(else)
        code block;
}
 */

