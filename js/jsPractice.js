/** CodeCamp Examples**/

// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

//TODO: Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

//TODO: Add the number to the end of the array, then remove the first element of the array.

//TODO: The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
    arr.push(item); //push adds to end
    var item = arr.shift(); //shift removes the element and returns the element removed
    return item;
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr)); //stringify converts JS object into a string
console.log(nextInLine(testArr, 7));
console.log("After: " + JSON.stringify(testArr));



//TODO: Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));


//TODO: Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

function testLogicalAnd(val) {
    if (val <= 50 && val >=25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(30));
console.log(testLogicalAnd(10));


//TODO:Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {
    if (val > 20 || val < 10) {
        return "Outside";
    }

    return "Inside";
}

console.log(testLogicalOr(15));
console.log(testLogicalOr(35));

//TODO: Combine the if statements into a single if/else statement

function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5"
    } else {
        result = "5 or Smaller";
    }
    return result;
}

console.log(testElse(4));
console.log(testElse(8));

//TODO: In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.
//
// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
//
// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if(strokes === 1){
        return names[0]
    } else if(strokes <= par - 2){
        return names[1]
    } else if(strokes === par - 1){
        return names[2]
    } else if(strokes === par){
        return names[3]
    } else if(strokes === par + 1){
        return names[4]
    } else if(strokes === par + 2){
        return names[5]
    } else{
        return names[6]
    }

    return "Change Me";
}

console.log(golfScore(5, 4));
console.log(golfScore(1));
console.log(golfScore(2, 4));
console.log(golfScore(10, 5));

//TODO: Write a switch statement which tests val and sets answer for the following conditions:
//     1 - alpha
//     2 - beta
//     3 - gamma
//     4 - delta

function caseInSwitch(val) {
    var answer = "";
    switch(val){
        case 1:
            return("alpha");
            break;
        case 2:
            return("beta");
            break;
        case 3:
            return("gamma");
            break;
        case 4:
            return("delta");
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

//TODO: Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff

function switchOfStuff(val) {
    var answer = "";
    switch(val){
        case "a":
            return "apple";
            break;
        case "b":
            return "bird";
            break;
        case "c":
            return "cat";
            break;
        default:
            return "stuff"
    }

    return answer;
}

console.log(switchOfStuff(1));
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));