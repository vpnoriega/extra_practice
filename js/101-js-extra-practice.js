//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
// For more on variables, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables

var onMarsRightNow = false;
console.log(onMarsRightNow);


// Exercise 2
// For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

var fruits = ['mango','banana','guava','kiwi','strawberry'];
console.log(fruits);


// Exercise 3
// Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// eggplant, broccoli, carrot, cauliflower, and zucchini

var vegetables = ['eggplant','broccoli','carrot','cauliflower','zucchini'];
console.log(vegetables);


// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

var numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers);


// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.

fruits.push('tomato');
console.log(fruits);


// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.

vegetables.push('tomato');
console.log(vegetables);

// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.

numbers.reverse();
console.log(numbers);


// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method

vegetables.sort();
console.log(vegetables);


// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order

fruits.sort();
fruits.reverse();
console.log(fruits);


// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.

var fruitsAndVeggies = vegetables.concat(fruits);
console.log(fruitsAndVeggies);

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();


// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one

function addOne(num){
    return parseInt(num+1);
}
console.log(addOne(1));


// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// Think about the definition of a number that is positive.
// Is 5 positive? Is 0.25 positive? Is 0.00001 positive? Is -0.001 positive?
// Is zero itself positive? What about infinity? What about negative infinity?
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators for guidance with JS comparison operators.

function isPositive(x){
    return x>0;
}
console.log(isPositive(5));


// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.

function isNegative(x){
    return x<0;
}
console.log(isNegative(-4));


// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

function isOdd(x){
    return x % 2 === 1;
}
console.log(isOdd(3));


// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.

function isEven(x){
    return x %2 === 0;
}
console.log(isEven(4));


// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!

function identity(input){
    return input;
}
console.log(identity('hello'));


// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd

function isPositiveOdd(x){
    return x>0 && x%2===1;
}
console.log(isPositiveOdd(5));


// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even

function isPositiveEven(x){
    return x>0 && x%2 === 0;
}
console.log(isPositiveEven(8));


// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.

function isNegativeOdd(x){
    return x<0 && x%2 === -1; // or x<0 && x%2 !== 0
}
console.log(isNegativeOdd(-1));


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
function isNegativeEven (x){
    return x<0 && x%2 === 0;
}
console.log(isNegativeEven(-6))

