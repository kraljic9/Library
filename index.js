const container = document.querySelector('#book-container');
const addBtn = document.querySelector('#add-book');
const form = document.querySelector('#book-form')

const myLibrary = [];

// Constructor function for book //
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to add book to library //
function addBookToLibrary(newBook) {
    myLibrary.push(newBook); // adds new book to the array//
    displayBooks()
}

// Function to display book //
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
            myLibrary.splice(index, 1); // ensures that the right book is removed //
            displayBooks(); //Refresh Container //
        })

        const toggleBtn = document.createElement('div');
        toggleBtn.classList.add('toggle-btn');
        toggleBtn.innerHTML = "Toggle";
        toggleBtn.addEventListener('click', () => {
            book.read = !book.read; // it toggles if book was read or not //
            displayBooks() //Refresh Container//
        })

        container.appendChild(bookDiv);
        
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookInfo);
        bookDiv.appendChild(bookBtns);

        bookBtns.appendChild(removeBtn);
        bookBtns.appendChild(toggleBtn);
    });
}


// Function to create new book object //
addBtn.addEventListener('click', () => {
    form.style.visibility = 'visible';
});

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    const title = document.querySelector('#title-input').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#status').value === "read" || "not read"; // Check the selected option

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    // Clear the form after submission and hide it
    form.reset();
    form.style.visibility = 'hidden';
});

// Initial display of books
displayBooks();



