// add book to ui
class userInterface {
  static displayBooks() {
    const books = bookStore.getbookBank();
    books.forEach((_newBook) => userInterface.addBook(_newBook));
  }
  static addBook(_newBook) {
    const outputField = document.getElementById('displayField');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.id = 'listname';
    const li2 = document.createElement('li');
    const bookName = document.createElement('h3');
    const by = document.createElement('span');
    by.textContent = 'by';
    by.id = 'anyName';
    const bookAuthor = document.createElement('h4');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove book';
    removeBtn.classList.add('delete');
    bookName.innerHTML = `${_newBook.title}`;
    bookAuthor.innerHTML = `${_newBook.author}`;

    outputField.appendChild(ul);
    ul.append(li, li2);
    li.append(bookName, by, bookAuthor);
    li2.appendChild(removeBtn);
  }

  static deleteBook(include) {
    if (include.classList.contains('delete')) {
      include.parentElement.parentElement.remove();
    }
  }

  static clearInput() {
    document.getElementById('titleName').value = '';
    document.getElementById('authorName').value = '';
  }
}

export default userInterface;
