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


/** ***** **/
//TODO: Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));