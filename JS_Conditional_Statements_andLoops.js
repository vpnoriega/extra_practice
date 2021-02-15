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


