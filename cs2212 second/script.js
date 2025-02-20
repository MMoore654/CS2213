function searchBooks() {
    let input = document.getElementById('search').value.toLowerCase();
    let bookList = document.getElementById('book-list');
    let books = bookList.getElementsByTagName('li');

    Array.from(books).forEach(function(book) {
        let title = book.textContent || book.innerText;
        if (title.toLowerCase().indexOf(input) > -1) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}