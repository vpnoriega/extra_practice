// /** CodeCamp Examples**/
//
// // In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
//
// //TODO: Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//
// //TODO: Add the number to the end of the array, then remove the first element of the array.
//
// //TODO: The nextInLine function should then return the element that was removed.
//
// function nextInLine(arr, item) {
//     arr.push(item); //push adds to end
//     var item = arr.shift(); //shift removes the element and returns the element removed
//     return item;
// }
//
// // Setup
// var testArr = [1,2,3,4,5];
//
// // Display code
// console.log("Before: " + JSON.stringify(testArr)); //stringify converts JS object into a string
// console.log(nextInLine(testArr, 7));
// console.log("After: " + JSON.stringify(testArr));
//
//
//
// //TODO: Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
//
// function trueOrFalse(wasThatTrue) {
//     if(wasThatTrue){
//         return "Yes, that was true";
//     }
//     return "No, that was false";
// }
//
// console.log(trueOrFalse(true));
// console.log(trueOrFalse(false));
//
//
// //TODO: Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
//
// function testLogicalAnd(val) {
//     if (val <= 50 && val >=25) {
//         return "Yes";
//     }
//     return "No";
// }
//
// console.log(testLogicalAnd(30));
// console.log(testLogicalAnd(10));
//
//
// //TODO:Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
//
// function testLogicalOr(val) {
//     if (val > 20 || val < 10) {
//         return "Outside";
//     }
//
//     return "Inside";
// }
//
// console.log(testLogicalOr(15));
// console.log(testLogicalOr(35));
//
// //TODO: Combine the if statements into a single if/else statement
//
// function testElse(val) {
//     var result = "";
//     if (val > 5) {
//         result = "Bigger than 5"
//     } else {
//         result = "5 or Smaller";
//     }
//     return result;
// }
//
// console.log(testElse(4));
// console.log(testElse(8));
//
// //TODO: In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.
// //
// // Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
// //
// // Strokes	Return
// // 1	"Hole-in-one!"
// // <= par - 2	"Eagle"
// // par - 1	"Birdie"
// // par	"Par"
// // par + 1	"Bogey"
// // par + 2	"Double Bogey"
// // >= par + 3	"Go Home!"
//
// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// function golfScore(par, strokes) {
//     if(strokes === 1){
//         return names[0]
//     } else if(strokes <= par - 2){
//         return names[1]
//     } else if(strokes === par - 1){
//         return names[2]
//     } else if(strokes === par){
//         return names[3]
//     } else if(strokes === par + 1){
//         return names[4]
//     } else if(strokes === par + 2){
//         return names[5]
//     } else{
//         return names[6]
//     }
//
//     return "Change Me";
// }
//
// console.log(golfScore(5, 4));
// console.log(golfScore(1));
// console.log(golfScore(2, 4));
// console.log(golfScore(10, 5));
//
// //TODO: Write a switch statement which tests val and sets answer for the following conditions:
// //     1 - alpha
// //     2 - beta
// //     3 - gamma
// //     4 - delta
//
// function caseInSwitch(val) {
//     var answer = "";
//     switch(val){
//         case 1:
//             return("alpha");
//             break;
//         case 2:
//             return("beta");
//             break;
//         case 3:
//             return("gamma");
//             break;
//         case 4:
//             return("delta");
//             break;
//     }
//     return answer;
// }
// console.log(caseInSwitch(1));
// console.log(caseInSwitch(2));
// console.log(caseInSwitch(3));
// console.log(caseInSwitch(4));
//
// //TODO: Write a switch statement to set answer for the following conditions:
// // a - apple
// // b - bird
// // c - cat
// // default - stuff
//
// function switchOfStuff(val) {
//     var answer = "";
//     switch(val){
//         case "a":
//             return "apple";
//             break;
//         case "b":
//             return "bird";
//             break;
//         case "c":
//             return "cat";
//             break;
//         default:
//             return "stuff"
//     }
//
//     return answer;
// }
//
// console.log(switchOfStuff(1));
// console.log(switchOfStuff("a"));
// console.log(switchOfStuff("b"));
// console.log(switchOfStuff("c"));
//
// //TODO: Write a switch statement to set answer for the following ranges:
// // 1-3 - Low
// // 4-6 - Mid
// // 7-9 - High
//
// function sequentialSizes(val) {
//     var answer = "";
//     switch(val){
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High";
//     }
//     return answer;
// }
//
// console.log(sequentialSizes(1));
// console.log(sequentialSizes(4));
// console.log(sequentialSizes(7));
// console.log(sequentialSizes(3));
//
//
// //TODO: You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
//
// var count = 0;
//
// function cc(card) {
//     switch(card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count ++;
//             break;
//         case 10:
//         case 'J':
//         case 'Q':
//         case 'K':
//         case 'A':
//             count --;
//             break;
//     }
//     if(count <= 0){
//         return count + " Hold";
//     } else {
//         return count + " Bet";
//     }
// }
//
// console.log(cc(2));
// console.log(cc(3));
// console.log(cc(7));
// console.log(cc('K'));
// console.log(cc('A'));
//
//
// // TODO: Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
//
// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
//
// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

// You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

//     You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire record collection object.
//     If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//     If value is an empty string, delete the given prop property from the album.
//     Note: A copy of the recordCollection object is used for the tests.


/** Triangle problem: Write code in your language of choice to print out
_*_
__*__
___*___

 h=3
Code should take any value of 'h' and print a symmetric triangle. **/

// take in an input of h
// 1st loop to iterate through the number of lines(rows) equal to h
// var line to equal empty string (will be replaced with a _ in 2nd loop)
// log to check
// 2nd loop to iterate through the number of dashes (i.e. h = 2, print: __ etc,  equals 1st loop iteration)
// (log to check)
// add a * var
// add a finalLine var of an empty string (this will be replaced with line/star concatenation in 2nd loop)
// concatenate a * to the dash, then add the dashes again (h=2, print: __ * __)

function triangle(h){
    for(let l = 1; l<=h; l++){
        let line = "";
        let star = "*";
        let finalLine = "";
        for(let d = 1; d<=l; d++){
            line = line + "_";
            finalLine = line + star + line;
        }
        console.log(finalLine);
    }
}

console.log(triangle(3));


