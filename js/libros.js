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



function searchTitle() {
    console.log('estoy dentro de la funcion')
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'db.json', true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let books = JSON.parse(this.responseText)
            let containerCards = document.getElementById('card-container')
            // console.log(containerCards)

            for (let item of books) {
                console.log(containerCards)
                containerCards.innerHTML += `
                <div class="card mb-3 w-100">
                    <div class="row no-gutters">
                        <div class="col-md-2 my-auto mx-auto">
                            <img src="${item.img}" class="card-img cover" alt="">
                        </div>
                        <div class="col-md-7 my-auto">
                            <div class="card-body">
                                <h5 class="card-title">${item.titulo}</h5>
                                <p class="card-text">${item.autor}</p>
                                <p>Año: <span>${item.año}</span></p>
                                <p>ISBN: <span>${item.isbn}</span></p>
                            </div>
                        </div>
                        <div class="col-2 my-auto mx-auto w-100 text-center">
                            <button type="button" class="btn btn-warning">
                                Disponibles <span class="badge badge-light">${item.disponibles}</span>
                            </button>
                            <button class="btn btn-primary my-4">Reservar</button>
                        </div>
                    </div>
                </div>                
                `
            }
        }
    }
}



// console.log(libros(1))

// console.log(books.map(function (book) {
//     return book.innerText
// }))