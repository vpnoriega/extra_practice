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


// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

function half (x){
    return x/2;
}
console.log(half(10));


// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.

function double(x){
    return x*2;
}
console.log(double(4));


// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.

function triple(x){
    return x*3;
}
console.log(triple(4));


// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.

function reverSign(x){
    return x * -1;
}
console.log(reverSign(-8));


// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number

function absoluteValue(x){
    return Math.abs(6)
}
console.log(absoluteValue(6))


// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.

function isMultipleOfThree(x){
    return x % 3 === 0;
}
console.log(isMultipleOfThree(9));


// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

function isMultipleOfBothThreeAndFive(x){
    return x % 3 === 0 && x % 5 === 0;
}
console.log(isMultipleOfBothThreeAndFive(15));


// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

function square(x){
    return x*x;
}
console.log(square(3));


// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.

function add(x,y){
    return x+y;
}
console.log(add(5,10));


// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.

function cube(x){
    return Math.pow(x,3)
}
console.log(cube(2));


// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.

function subtract(x,y){
    return x-y;
}
console.log(subtract(6,2))


// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.

function multiply(x,y){
    return x*y;
}
console.log(multiply(6,7));


// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.

function divide(x,y){
    return x/y;
}
console.log(divide(10,2));


// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.

function quotient(x,y){
    return Math.floor(x/y);
}
console.log(quotient(12,3));


// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

function remainder (x,y){
    return Math.round(x%y);
}
console.log(remainder(15,4))


// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.

function sumOfSquares(x,y){
    var sqr1 = Math.pow(x,2);
    var sqr2 = Math.pow(y,2);

    return sqr1 + sqr2;
}
console.log(sumOfSquares(3,4))


// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
function timesTwoPlusThree (x){
    return (x*2)+3
}
console.log(timesTwoPlusThree(4))


// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.
function areaOfRectangle(x,y){
    return x*y;
}
console.log(areaOfRectangle(5,4))