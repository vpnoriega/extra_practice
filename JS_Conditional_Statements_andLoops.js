// 1. Write a JavaScript program that accept two integers and display the larger:

var inputOne, inputTwo;
inputOne=(Number(prompt("Enter a number: ")))
inputTwo=(Number(prompt("Enter a second number: ")))
if(inputOne>inputTwo){
    alert("The first input is the larger number: " + inputOne)
} else if(inputOne===inputTwo) {
    alert("Both inputs are equal.")
} else{
    alert("The 2nd input is the larger number: " + inputTwo)
}

// // 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign:

function numberSign(x,y,z) {
    if (x*y*z > 0) {
        alert("The sign is: + ")
    }else {
        alert("The sign is - ")
    }
}
numberSign(3,-3,-3)

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

function numberSort(a,b,c){
    var array = [a,b,c];
    return array.sort()
}
alert(numberSort(-3,9,2))

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
function highestNumber(q,w,e,r,t){
    return Math.max(q,w,e,r,t);
}
alert(highestNumber(-5,6,2,3,10))

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0)
        console.log(i + " is even.")
    else console.log(i + " is odd.")
}

// 6.  Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

var students = [['David', 80],['Vinoth', 77], ['Divya', 88],['Ishitha', 95],['Thomas', 68]];
var avgGrade = 0;
for (var i=0; i <students.length; i++){ //why are they using .lenght? to only add the number values?
    avgGrade = avgGrade + students[i][1]; //not really sure what this line means
    var avg = (avgGrade/students.length);
}

console.log('Average grade: ' + (avgGrade)/students.length);
if (avg < 60){
    console.log ('Grade: F');
} else if (avg < 70){
    console.log ('Grade: D');
} else if (avg < 80){
    console.log ('Grade: C');
} else if (avg < 90){
    console.log ('Grade: B');
} else if (avg < 100) {
    console.log('Grade: A');
}

// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (var i = 1; i <= 100; i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
        console.log(i + " FizzBuzz");
    }
else if (i % 3 === 0)
    {
        console.log(i + " Fizz");
    }
else if (i % 5 === 0)
    {
        console.log(i + " Buzz");
    }
else
    {
        console.log(i);

    }
} // Only question I have for this one is why did it they put it in the order of 3&5, then each individually?


/* Question 8: According to Wikipedia a happy number is defined by the following process:
    "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".

 Write a JavaScript program to find and print the first 5 happy numbers. */

function happy_number(num) {
    var m, n;
    var c = [];

    while (num != 1 && c[num] !== true) { // I am not sure what it means to have a variable next to an array with a value inside of it, and everything in this while loop is confusing
        c[num] = true;
        m = 0;
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }
        num = m;
    }
    return (num == 1);
}

var cnt = 5; // I don't understand this problem at all :/
var num = 1;
var f5 = '';
while (cnt-- > 0) {
    while (!happy_number(num))
        num++;
    f5 = f5 + (num + ',');
    num++;
}
console.log('first 5 happy numbers are: ' + f5);

// Problem 9:
/*Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.*/

function armstrongNumber(){
    for (var i = 1; i<10; ++i) {
        for (var j = 0; j<10; ++j) {
            for (var k = 0; k < 10; ++k) { //I don't understand what the for loops within for loops is doing
                var pow =(Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
                var plus = (i*100 + j*10 + k);
                if (pow === plus){
                    console.log(pow);
                }
            }
        }
    }
}
armstrongNumber();

// Problem 10: Write a JavaScript program to construct the following pattern, using a nested for loop
//*
//**
//***
//****
//*****

var x,y,z;
for (var x=1; x<=6; x++){ //outerloop prints number of rows
    for (var y=1; y<x; y++){ //innerloop prints number of times to repeat the character
        z=z+('*'); // don't understand why this is up here if definition of 'z' is below the console log
    }
    console.log(z);
    z='';
}