/** Available Books Coding Challenge**/
//
// //accept 4 arguments and set them as the instance of the book
// function Book (title, author, ISBN, numCopies){
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }
//
// // Declare the getAvailability function on the prototype and initialize conditions so each instance doesn't create a new function each time we make a new object, and each book instance can use the prototype's function
// Book.prototype.getAvailability = function() {
//     if(this.numCopies === 0){
//         return "Out of Stock";
//     } else if (this.numCopies < 10){
//         return "Low Stock";
//     }
//     return "In stock"
// }
//
// // Using the same approach as above, the sell function takes an argument of numCopiesSold, and subtracts it from the number of available copies
// Book.prototype.sell = function(numCopiesSold = 1){
//     this.numCopies -= numCopiesSold;
// }
// // Restock function takes an argument NumCopiesStocked, and adds it to the number of available copies. Assign a default value to the arguments in the event an argument is not passed
// Book.prototype.restock = function(numCopiesStocked = 5){
//     this.numCopies += numCopiesStocked;
// }
//
// // Create a new book to test the restock and sell functions
// const HUNGERGAMES = new Book ("Hunger Games", "Suzanne Collins", 123989, 5);
// console.log(HUNGERGAMES.getAvailability()); // Low Stock - because numCopies < 10 (5)
//
// HUNGERGAMES.restock(12);
// console.log(HUNGERGAMES.getAvailability()); // In stock - because numCopies > 10 (12 + 5 = 17)
//
// HUNGERGAMES.sell(17);
// console.log(HUNGERGAMES.getAvailability());// Out of Stock - because numCopies equals 0 (17 - 17)


/** Transition Function above into a Class component**/

// define a constructor inside the class that takes in 4 arguments to create the blueprint for the book
 class Book {
     constructor(title, author, ISBN, numCopies) {
         this.title = title;
         this.author = author;
         this.ISBN = ISBN;
         this.numCopies = numCopies;
     }

     // Create get availability method directly in the class. All book related code lives inside the book  class (example of Encapsulation)
     getAvailability(){
         if(this.numCopies === 0){
             return "Out of Stock";
         } else if (this.numCopies < 10){
             return "Low Stock";
         }
         return "In stock"
     }

    //getter function to retrieve a book's availability allows us to write "book.availability" instead of calling book.getAvailability
    get availability(){
        return this.getAvailability();
    }

     // include the sell and restock functions directly within the class
     sell(numCopiesSold = 1){
         this.numCopies -= numCopiesSold;
     }
     restock(numCopiesRestocked = 5){
         this.numCopies += numCopiesRestocked;
     }
 }

 // Create a new book to test the restock and sell functions
 const HUNGERGAMES = new Book ("Hunger Games", "Suzanne Collins", 123989, 5);
 console.log(HUNGERGAMES.availability); // Low Stock - because numCopies < 10 (5)

 HUNGERGAMES.restock(12);
 console.log(HUNGERGAMES.availability); // In stock - because numCopies > 10 (12 + 5 = 17)

 HUNGERGAMES.sell(17);
 console.log(HUNGERGAMES.availability);// Out of Stock - because numCopies equals 0 (17 - 17)