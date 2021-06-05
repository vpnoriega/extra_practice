// Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.

for(let n=1; n<50; n++){
    if(n%15 === 0){
        console.log(n + "Fizzbuzz")
    } else if(n%5 === 0){
        console.log(n +"buzz")
    } else if(n%3 === 0){
        console.log(n +"fizz")
    } else{
        console.log(n)
    }
}

for(let n=1; n<50; n++){
    switch(true){
        case n%5 === 0 && n%3 ===0:
            console.log(n +"fizzbuzz");
            break;
        case n%5 === 0:
            console.log(n +"buzz");
            break;
        case n%3 === 0:
            console.log(n +"fizz");
            break;
        default:
            console.log(n)
    }
}

/** if (condition){
    // executed only if "condition" is true
} else if (other condition){
    // executed only if "condition" was false and "other condition" is true
} else {
    // executed only if both "condition" and "other condition" were false
}
 */

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