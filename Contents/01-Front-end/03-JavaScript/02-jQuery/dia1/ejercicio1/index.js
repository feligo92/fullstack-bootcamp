

function getBooks() {
    const arrBooks = [
        {
            "titulo": "Todos los detectives se llaman Flanagan",
            "Autor": "Andreu Martín y Jaume Ribera",
            "URL": "https://imagessl9.casadellibro.com/a/l/t0/89/9788466751889.jpg",
            "Año": 1991
        }, {
            "titulo": "El rayo que no cesa",
            "Autor": "Miguel Hernández",
            "URL": "https://images-eu.ssl-images-amazon.com/images/I/41kp9KFlmdL.jpg",
            "Año": 1936
        }, {
            "titulo": "Poeta en Nueva York",
            "Autor": "Federico García Lorca",
            "URL": "http://www.librerialamoderna.com/wp-content/uploads/2017/02/Portada-14x21-PNY-682x1024.jpg",
            "Año": 1940
        }, {
            "titulo": "Soledades. Galerías. Otros poemas",
            "Autor": "Antonio Machado",
            "URL": "https://librosdeayeryhoy.files.wordpress.com/2014/02/soledades.jpg",
            "Año": 1907
        }
    ]
    for (let i = 0; i < arrBooks.length; i++) {

        let book = arrBooks[i]

        $("body > div.container > div").append(`<div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 18rem;">
            <img src="${book.URL}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.titulo}</h5>
                <p class="card-text">${book.Autor}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-right">${book.Año}</li>
            </div>
        
            </div>`)
    }
}


$(window).ready(() => { getBooks() })
