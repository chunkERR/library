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
  for (let index = 0; index < myLibrary.length; index++) {
    const card = document.createElement("div");
    card.classList.add("book-card");
    books.appendChild(card);
    for (let key in myLibrary) {
      console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement("p");
      para.textContent(`${key}: ${myLibrary[key]}`);
      card.appendChild(para);
    }
  }
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);

console.log(myLibrary);
displayBooks(myLibrary);
