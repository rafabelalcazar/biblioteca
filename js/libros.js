search = document.getElementById('search-book')
books = document.getElementsByClassName('card-title')
categorySelected = document.getElementById('categoria')
console.log(categorySelected.value)

const deployByTitle = function () {
    if (this.readyState == 4 && this.status == 200) {
        let books = JSON.parse(this.responseText)
        let containerCards = document.getElementById('card-container')
        containerCards.innerHTML = ''
        // console.log(containerCards)

        for (let item of books) {
            // console.log(item.titulo.toLowerCase())

            console.log(item.categoria.includes(categorySelected.value))
            if (item.titulo.toLowerCase().includes(search.value.toLowerCase()) && (item.categoria.includes(categorySelected.value) || categorySelected.value == 'todos')) {
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

const deployAutor = function () {
    if (this.readyState == 4 && this.status == 200) {
        let books = JSON.parse(this.responseText)
        let containerCards = document.getElementById('card-container')
        containerCards.innerHTML = ''
        // console.log(containerCards)

        for (let item of books) {
            // console.log(item.titulo.toLowerCase())

            if (item.autor.toLowerCase().includes(search.value.toLowerCase())) {
                // console.log(containerCards)
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
            </div>`
            }
        }
    }
}

const deployISBN = function () {
    if (this.readyState == 4 && this.status == 200) {
        let books = JSON.parse(this.responseText)
        let containerCards = document.getElementById('card-container')
        containerCards.innerHTML = ''
        // console.log(containerCards)

        for (let item of books) {
            // console.log(item.titulo.toLowerCase())

            if (item.isbn.toLowerCase().includes(search.value.toLowerCase())) {
                // console.log(containerCards)
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
            </div>`
            }
        }
    }
}

function searchTitle() {
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'db.json', true)
    xhttp.send()
    xhttp.onreadystatechange = deployByTitle
}

function searchAutor() {
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'db.json', true)
    xhttp.send()
    xhttp.onreadystatechange = deployAutor
}

function searchISBN() {
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'db.json', true)
    xhttp.send()
    xhttp.onreadystatechange = deployISBN
}