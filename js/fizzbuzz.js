for (var i=1; i < 101; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

for (var i = 1; i<=100; i++){
    if (i % 15 === 0) console.log("Fizzbuzz");
    else if(i%3 === 0) console.log("fizz");
    else if(i%5 === 0) console.log("buzz");
    else console.log(i);
}

// this part doesn't work, only fizz buzz in each line:
for(var i =1; i<=100; i++){
    if(i%3 ===0){
        console.log("buzz")
    } else if (i%5 ===0) {
        console.log("fizz")
    } else if(i%3 === 0 && i % 5 ===0){
        console.log("fizzbuzz")

    } else{
        console.log(i);
    }
}