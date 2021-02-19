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
}
// Only question I have for this one is why did it they put it in the order of 3&5, then each individually?