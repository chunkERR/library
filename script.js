const books = document.querySelector(".books");
const formTitle = document.querySelector(".title");
const formAuthor = document.querySelector(".author");
const formPages = document.querySelector(".pages");
const selectRead = document.querySelector("#read");
const submit = document.querySelector(".submit");
const form = document.querySelector(".new-book");

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
    read: selectRead.value,
  };

  myLibrary.push(book);
  document.querySelector(".new-book").reset();
  console.log(myLibrary);
  displayBooks();
}

function displayBooks() {
  let index = 0;
  const removeCards = document.querySelectorAll(".card");
  for (let i = 0; i < removeCards.length; i++) {
    removeCards[i].remove();
  }

  myLibrary.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
    for (let key in element) {
      console.log(`${key} : ${element[key]}`);
      const cardContent = document.createElement("p");
      cardContent.innerHTML = `${key} : ${element[key]}`;
      card.appendChild(cardContent);
    }
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Remove from library";
    deleteButton.dataset.linkedArray = index;
    index++;
    card.appendChild(deleteButton);
    const toggleReadButton = document.createElement("button");
    toggleReadButton.classList.add("toggle-button");
    toggleReadButton.textContent = "Read/Unread";
    card.appendChild(toggleReadButton);

    deleteButton.addEventListener("click", removeCard);
    toggleReadButton.addEventListener("click", switchStatus);

    function removeCard() {
      let retrieveBookToRemove = deleteButton.dataset.linkedArray;
      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
      displayBooks();
    }

    function switchStatus() {
      if (selectRead.value === "Yes") {
        card.classList.toggle("read");
      } else if (selectRead.value == "No") {
        card.classList.toggle("unread");
      }
    }

    function checkIfRead() {
      if (card.value == "Yes") {
        card.classList.toggle("read");
      } else if (selectRead.value == "No") {
        card.classList.toggle("unread");
      }
    }
  });
}

submit.addEventListener("click", addBookToLibrary);

// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 300, true);
// addBookToLibrary("Lord of the Rings", "J.R.R Tolkien", 1000, false);

// displayBooks(myLibrary);
