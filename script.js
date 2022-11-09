const books = document.querySelector(".books");
const formTitle = document.querySelector(".title")
const formAuthor = document.querySelector(".author")
const formPages = document.querySelector(".pages")
const formRead = document.querySelector("#read")
const submit = document.querySelector(".submit")
const form = document.querySelector(".new-book")


// array of books

let myLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// function addBookToLibrary(title, author, pages, read) {
//   let book = new Book(title, author, pages, read);
//   myLibrary.push(book);
// }


function addBookToLibrary(event) {
  event.preventDefault();
  let book = {
title: formTitle.value,
author: formAuthor.value,
pages: formPages.value,
read: formRead.value
  }

myLibrary.push(book);
document.querySelector(".new-book").reset();
console.log(myLibrary);
displayBooks();
}


function displayBooks() {
  const removeCards = document.querySelectorAll('.card');
  for (let i = 0; i < removeCards.length; i++) {
    removeCards[i].remove();
  }
  myLibrary.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
    for (let key in element) {
      console.log(`${key} : ${element[key]}`)
      const cardContent = document.createElement("p")
      cardContent.innerHTML = (`${key} : ${element[key]}`)
      card.appendChild(cardContent);

    }
  });
}


submit.addEventListener("click", addBookToLibrary)


// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
// addBookToLibrary("Lord of the Rings", "J.R.R Tolkien", 1000, false);


// displayBooks(myLibrary);
