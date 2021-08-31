/** Available Books Coding Challenge**/

//accept 4 arguments and set them as the instance of the book
function Book (title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
}

// Declare the getAvailability function on the prototype and initialize conditions
// Declare the function so each instance doesn't create a new function each time we make a new object, so each book instance can use the prototype's function
Book.prototype.getAvailability = function() {
    if(this.numCopies === 0){
        return "Out of Stock";
    } else if (this.numCopies < 10){
        return "Low Stock";
    }
    return "In stock"
}

// Using the same approach as above, the sell function takes an argument of numCopiesSold, and subtracts it from the number of available copies
Book.prototype.sell = function(numCopiesSold = 1){
    this.numCopies -= numCopiesSold;
}
// Restock function takes an argument NumCopiesStocked, and adds it to the number of available copies. Assign a default value to the arguments in the event an argument is not passed
Book.prototype.restock = function(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
}

// Create a new book to test the restock and sell functions
const HUNGERGAMES = new Book ("Hunger Games", "Suzanne Collins", 123989, 5);
console.log(HUNGERGAMES.getAvailability()); // Low Stock - because numCopies < 10 (5)

HUNGERGAMES.restock(12);
console.log(HUNGERGAMES.getAvailability()); // In stock - because numCopies > 10 (12 + 5 = 17)

HUNGERGAMES.sell(17);
console.log(HUNGERGAMES.getAvailability());// Out of Stock - because numCopies equals 0 (17 - 17)