// alert('hola')
search = document.getElementById('search-book')
books = document.getElementsByClassName('card-title')

// Recibe lo que se escriba en searchbar y el objeto de libros
function compararTitulo(search, books) {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].innerText.includes(search.value))
        if (books[i].innerText.includes(search.value)) {
            // Va hasta el card del libro y le quita la clase display none d-none
            books[i].parentNode.parentNode.parentNode.parentNode.classList.remove('d-none')
            // return books[i].parentNode.parentNode.parentNode.parentNode.classList.remove('d-none')
        }
        else {
            books[i].parentNode.parentNode.parentNode.parentNode.classList.add('d-none')
        }

        // console.log(books[i].innerText)
    }
}


function comparar() {
    compararTitulo(search, books)
}




// console.log(libros(1))

// console.log(books.map(function (book) {
//     return book.innerText
// }))