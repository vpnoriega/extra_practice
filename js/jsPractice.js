// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

//TODO: Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

//TODO: Add the number to the end of the array, then remove the first element of the array.

//TODO: The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
    arr.push(item);
    var item = arr.shift();
    return item;
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));