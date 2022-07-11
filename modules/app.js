import bookStore from './bookStore';
import userInterface from './modules/user-interface';
import bookBank from './modules/bookBank';
// displaying book details

document.addEventListener('DOMContentLoaded', userInterface.displayBooks);
// adding book
document.querySelector('#form').addEventListener('submit', (e) => {
  // e.preventDefault();
  const title = document.getElementById('titleName').value;
  const author = document.getElementById('authorName').value;
  const book = new bookBank(title, author);

  // Adding book to user interface
  userInterface.addBook(book);

  // add book to store
  bookStore.addBook(book);

  userInterface.clearInput();
});

document.querySelector('#displayField').addEventListener('click', (e) => {
  // remove book for interface
  userInterface.deleteBook(e.target);

  //    remove book for storage
  bookStore.removeBook(
    e.target.parentElement.parentElement.firstChild.firstChild.textContent
  );
});
