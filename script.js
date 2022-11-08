const books = document.querySelector(".books");

// array of books

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
  });
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);

displayBooks(myLibrary);
