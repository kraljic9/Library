
const container = document.querySelector('#book-container');
const addBtn = document.querySelector('#add-book');


const myLibrary = [
    new Book("book title", "book author", "100", true),
    new Book("book title two", "book author two", "200", true),
    new Book("book title three", "book author three", "300", true)
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return {
            title: this.title,
            author: this.author,
            pages: this.pages,
            read: this.read
        }
    }
}

function addBookToLibrary() {
    myLibrary.push(book);
    displayBooks()
}

function displayBooks() {
    container.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');

        bookDiv.appendChild(removeBtn)
    });
}

