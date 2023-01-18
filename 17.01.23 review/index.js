let user = {
  name: "Test",
  firstName: "John",
  hobbies: ["Golf", "Programming"],
  address: {
    street: "Teststreet",
    number: 42,
    postalCode: 10115,
    city: "Berlin",
    country: "DE",
  },
  favBooks: [
    { title: "book2", author: "Robert Green", pages: 555, edition: 2 },
    { title: "book3", author: "Robert Blue", pages: 1234, edition: 1 },
    { title: "book1", author: "George yellow", pages: 34, edition: 1 },
  ],
  greeting: function (){
    return `hello ${this.firstName}`
  }
 
};

console.log(user.greeting())

// console.log(user.name) // returns "Test"
// console.log(user.firstName)  // returns "John"

// console.log(user.favBooks) // [{ title: "book1", author: "Robert Green", pages: 555, edition: 2 },{ title: "book2", author: "Robert Blue", pages: 1234, edition: 1 }, { title: "book3", author: "George yellow", pages: 1234, edition: 1 }]

// const firstBook = user.favBooks[0];

// console.log(firstBook) // { title: "book1", author: "Robert Green", pages: 555, edition: 2 }
// console.log(firstBook.author) // "Robert Green"

//======================================================================
// Print out the author of the book with the title: "book1"
// solution with a function (dynamic):
const findBook = (x) => {
  const bookObj = user.favBooks.find(
    (el) => el.title.toLocaleLowerCase() === x
  );

  if (bookObj) {
    console.log(bookObj.author);
  } else {
    console.log("book does not exist");
  }
};

findBook("book3");

// solution without a function (hardcoded):

// a.Find the book with the title: "book1"
// const bookObj =  user.favBooks.find((el)=> el.title.toLocaleLowerCase() === "book1" )

// console.log(bookObj) // { title: 'BoOk1', author: 'George yellow', pages: 34, edition: 1 }

// // b.Print out the author name
// console.log(bookObj.author); // "George yellow"
//===================================================================

// Find all the books that have 500 pages or more

const filteredArr = user.favBooks.filter((el) => el.pages >= 500);

// console.log(filteredArr)

//====================================================================

// console.log( 2 == '2') // true
// console.log( 2 === '2') // false

//==================================================
// adding a new property to an existing object:
// add an age property with a value of 33

user.age = 33;

console.log(user)

//================================================

// add a release date property to a specific object:

const addReleaseDate = (bookTitle, year) => {
    
    const bookObj = user.favBooks.find(
      (el) => el.title.toLocaleLowerCase() === bookTitle
    );
  
    if (bookObj) {
      bookObj.releaseDate = year

    } else {
      console.log("book does not exist");
    }
  };
  
  addReleaseDate("book1", 1999);
  addReleaseDate("book2", 2000);
  addReleaseDate("book3", 2020);

  console.log(user)

//=======================================================