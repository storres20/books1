/* eslint-disable*/

const addButton = document.getElementById('addButton');
const title = document.getElementById('title');
const author = document.getElementById('author');

const addBook = document.getElementById('addBook');

/* addBook - hold books after every refresh page */
if (localStorage.getItem('books') !== null) {
  const getbook = JSON.parse(localStorage.getItem('books'));
  console.log(getbook);

  getbook.forEach((item) => {
    addBook.innerHTML += `
      <div class="books">
        <p>"${item.title}" by "${item.author}"</p>
        <button class="remove" name="${item.title}">Remove</button>
      </div>
    `;
  });
}
/* ***** */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class methods {
  addbook(book1) {
    addBook.innerHTML += `
    <div class="books">
      <p>"${title.value}" by "${author.value}"</p>
      <button class="remove" name="${title.value}">Remove</button>
    </div>
  `;
    console.log('hello')
    
    if (localStorage.getItem('books') === null) {
      const books = [];
      books.push(book1);
      localStorage.setItem('books', JSON.stringify(books));
    } else {
      const books = JSON.parse(localStorage.getItem('books'));
      books.push(book1);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  removebook() {
    /* remove button */
    const remove = document.querySelectorAll('.remove');
    
    remove.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentElement.remove();
        const bookname = item.name;
    
        /* remove from localStorage */
        const getremove = JSON.parse(localStorage.getItem('books'));
    
        const newArr = getremove.filter((object) => object.title !== bookname);
    
        /* update localstorage */
        localStorage.setItem('books', JSON.stringify(newArr));
      });
    });
  }
}

/* initialize method class */
const ui = new methods();

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const book1 = new Book(title.value, author.value);
  
  /* add book with method class */
  ui.addbook(book1);
});

/* remove book with method class */
ui.removebook();
