



function setIdioma() {
    const objES = {
        "titulo": "Sin rendición",
        "botonTitulo": "Saber más",
        "bodyTitle": "Letra",
        "cancion": "Hicimos una promesa que juramos que siempre recordaríamos Sin retirada ni rendición Como soldados en la noche de invierno con el voto de defender Sin retirada ni rendición",
        "botonCancion": "Ver detalles"
    }
    

    let clave = window.location.search.replace("?", "").split("=")[0];
    let valor = window.location.search.replace("?", "").split("=")[1]

    if (clave == "idioma" && valor == "es") {

        $("body > main > div.jumbotron > div > h1").text(objES.titulo);
        $("body > main > div.jumbotron > div > p > a").text(objES.botonTitulo);
        $("body > main > div.container > div").empty()
        $("body > main > div.container > div").html(`<div class="col-md-4">
            <h2>${objES.bodyTitle}</h2>
            <p>${objES.cancion}</p>
            <p><a class="btn btn-secondary" href="#" role="button">${objES.botonCancion}&raquo;</a></p>
            </div>
            <hr>`);
    }
}



$(window).ready(() => { setIdioma() });