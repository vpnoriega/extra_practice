//Codecamp Loops Practice

/**Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.*/
var myArray = [];
var i = 5;

while(i>=0){
    myArray.push(i);
    i--;
}


/** Use a for loop to push the values 1 through 5 onto myArray.*/
var myArray = [];
for(var i = 1; i<=5; i++){
    myArray.push(i);
}


/**Push the odd numbers from 1 through 9 to myArray using a for loop.*/
var myArray = [];
for (var i = 1; i < 10; i += 2){
    myArray.push(i);
}


/**Push the odd numbers from 9 through 1 to myArray using a for loop.*/
var myArray = [];
for (var i = 9; i > 0; i -= 2){
    myArray.push(i);
}


/**Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.*/
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for(var i = 0; i<myArr.length; i++){
    total+= myArr[i];
}


/** Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr. */

function multiplyAll(arr) {
    var product = 1;
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            product = product * arr[i][j]
        }
    }
    return product;
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));



function sum(arr, n) {
    if(n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([5,5,4],3)); //14
console.log(sum([10,5,6], 2)) //15

//explanation: The if statement checks to see if sum is evaluating the base case, n <= 0, or not. If it is, then sum returns the answer, 0 - the sum of elements from 0 to 0 inclusive. Otherwise, it recurses by evaluating a simpler function call, sum(arr, n - 1). Once that returns it adds a single array element, arr[n - 1], to it and returns that sum.