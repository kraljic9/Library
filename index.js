
const container = document.querySelector('#book-container');
const addBtn = document.querySelector('#add-book');


const myLibrary = [
    
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks()
}

function displayBooks() {
    container.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookTitle = document.createElement('div');
        bookDiv.classList.add('book-title');
        bookTitle.innerHTML = `<h3>${book.title}</h3>`;

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');

        bookInfo.innerHTML = 
        `<p>Author:${book.author}</p>
        <p>Pages:${book.pages}</p>
        <p>Status: ${book.read ? "read" : "not read"}</p>`;

        const bookBtns = document.createElement('div');
        bookBtns.classList.add('book-btns');

        const removeBtn = document.createElement('div');
        removeBtn.classList.add('remove-btn');
        removeBtn.innerHTML = "REMOVE";
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        })

        const toggleBtn = document.createElement('div');
        toggleBtn.classList.add('toggle-btn');
        toggleBtn.innerHTML = "Toggle";
        toggleBtn.addEventListener('click', () => {
            book.read = !book.read;
            displayBooks()
        })

        container.appendChild(bookDiv);
        
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookInfo);
        bookDiv.appendChild(bookBtns);

        bookBtns.appendChild(removeBtn);
        bookBtns.appendChild(toggleBtn);
    });
}

displayBooks();

addBtn.addEventListener('click', () => {
    const title = prompt("Enter book title:");
    const author = prompt("Enter book author:");
    const pages = prompt("Enter number of pages:");
    const read = confirm("Have you read it?");

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
});


