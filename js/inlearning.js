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

/** Transition Book Function above into a Class component**/

// // define a constructor inside the class that takes in 4 arguments to create the blueprint for the book
//  class Book {
//      constructor(title, author, ISBN, numCopies) {
//          this.title = title;
//          this.author = author;
//          this.ISBN = ISBN;
//          this.numCopies = numCopies;
//      }
//
//      // Create get availability method directly in the class. All book related code lives inside the book  class (example of Encapsulation)
//      getAvailability(){
//          if(this.numCopies === 0){
//              return "Out of Stock";
//          } else if (this.numCopies < 10){
//              return "Low Stock";
//          }
//          return "In stock"
//      }
//
//     //getter function to retrieve a book's availability allows us to write "book.availability" instead of calling book.getAvailability
//     get availability(){
//         return this.getAvailability();
//     }
//
//      // include the sell and restock functions directly within the class
//      sell(numCopiesSold = 1){
//          this.numCopies -= numCopiesSold;
//      }
//      restock(numCopiesRestocked = 5){
//          this.numCopies += numCopiesRestocked;
//      }
//  }
//
//  // Create a new book to test the restock and sell functions
//  const HUNGERGAMES = new Book ("Hunger Games", "Suzanne Collins", 123989, 5);
//  console.log(HUNGERGAMES.availability); // Low Stock - because numCopies < 10 (5)
//
//  HUNGERGAMES.restock(12);
//  console.log(HUNGERGAMES.availability); // In stock - because numCopies > 10 (12 + 5 = 17)
//
//  HUNGERGAMES.sell(17);
//  console.log(HUNGERGAMES.availability);// Out of Stock - because numCopies equals 0 (17 - 17)


/** Create a movie object that takes in 5 args of title, director, genre, release year, rating. Movie prototype should have a function called get overview which logs the following overview for each film: "<movie>, a <genre> film directed by <director> was released in <releaseYear>. It received a rating of <rating>." */

// constructor function syntax:
// function Movie(title, director, genre, releaseYear, rating){
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.releaseYear = releaseYear;
//     this.rating = rating;
// }
//
// // To add a function to the prototype, use the constructor name followed by the prototype keyword. Then, add the name of the function you want to create
// Movie.prototype.getOverview = function(){
//     return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
// }

// const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
// const Batman = new Movie(
//     "The Dark Knight",
//     "Christopher Nolan",
//     "Action",
//     2008,
//     83
// );
//
// console.log(Spiderman); //Movie properties
// console.log(Spiderman.getOverview()); // Spiderman, a Action film directed by Sam Raimi was released in 2002. It received a rating of 87.
// console.log(Batman.getOverview()); // The Dark Knight, a Action film directed by Christopher Nolan was released in 2008. It received a rating of 83.

/** Movie overview Class component */

class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview (){
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }
}

// test the Movie class
const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const Batman = new Movie(
    "The Dark Knight",
    "Christopher Nolan",
    "Action",
    2008,
    83
);

console.log(Spiderman); //Movie properties
console.log(Spiderman.getOverview()); // Spiderman, a Action film directed by Sam Raimi was released in 2002. It received a rating of 87.
console.log(Batman.getOverview()); // The Dark Knight, a Action film directed by Christopher Nolan was released in 2008. It received a rating of 83.

// While using constructor functions is just as valid as using class notation, class notation encapsulates all of the functionality in one place so it's simpler and easier to read.