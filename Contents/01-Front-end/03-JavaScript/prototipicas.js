//Obten un nuevo array con todas las lertras en minúscula

const cars = [
    'audi',
    'Ferarri',
    'ford',
    'Peugot',
];
let lowerCars = []
cars.forEach((elemento) => {

    lowerCars.push(elemento.toLowerCase());
})



const cars = [
    { brand: 'Audi', color: 'black' },
    { brand: 'Audi', color: 'white' },
    { brand: 'Ferarri', color: 'red' },
    { brand: 'Ford', color: 'white' },
    { brand: 'Peugot', color: 'white' }
];



cars.filter((element) => {
    if (element["color"] == "red") {
        return false
    } else {
        return true
    }
})

// Selecciona las palabras con 3 letras o menos

let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let lorem = str.match(/ [a-z]{0,3} /gim)



/*1.- Crearemos un array que va a contener un listado de los títulos de nuestros libros favoritos (si necesitamos inspiración, 
   mirar: https://thegreatestbooks.org/). Sobre ese array haremos lo siguiente:

- Encontrar la posición en la que se encuentra un libro en particular dentro del array. Guardar este número en una variable.
- Comprobar si en dicho listado se encuentra el título "Moby dick".*/
/*2.- Crear un segundo listado con los títulos de los libros que más odiamos (nuevamente,
     se puede mirar la web que he dejado más arriba para sacar ejemplos). 
Concatenar los dos arrays. Luego eliminar un libro del array resultante.*/

let libros = ["Juego de tronos", "Choque de reyes", "Tormenta de espadas", "Festín de cuervos",
    "Danza de dragones", "Vientos de invierno", "Sueño de primavera", "Moby dick", "El rayo que no cesa"];

let libro = libros.indexOf("El rayo que no cesa");
if (libros.indexOf("Moby dick") > -1) {
    console.log("Esta en el array")
} else {
    console.log("No esta en el array")
}
let libros = ["Juego de tronos", "Choque de reyes", "Tormenta de espadas", "Festín de cuervos",
    "Danza de dragones", "Vientos de invierno", "Sueño de primavera", "Moby dick", "El rayo que no cesa"];
let librosMalos = ["Mein Kampf", "La Bíblia", "Tirant lo Blanc", "La Constitución Española"]


let todosLibros = libros.concat(librosMalos);

todosLibros.splice(todosLibros.indexOf("Mein Kampf"), 0)


/* 3.- Tenemos el siguiente string:

const frase = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, 
no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
 adarga antigua, rocín flaco y galgo corredor."

Mediante un prompt, preguntad al usuario que escriba una palabra. Buscad mediante javascript dicha palabra en el string anterior, 
y guardad en una variable la posición del string en la que se encuentra la palabra. Inyectadla con javascript en el DOM.*/

const frase = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme,no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor."

let userWord = prompt("Introduce una palabra del texto");
let wordPosition = frase.toLowerCase().indexOf(userWord.toLowerCase());

if (wordPosition > -1) {
    document.write(`<h3>${userWord}</h3>`);
} else {
    document.write(`<h3> ${userWord} no esta en el texto </h3>`);
}