let test = [{ "name": "Spain", "topLevelDomain": [".es"], "alpha2Code": "ES", "alpha3Code": "ESP", "callingCodes": ["34"], "capital": "Madrid", "altSpellings": ["ES", "Kingdom of Spain", "Reinode España"], "region": "Europe", "subregion": "SouthernEurope", "population": 46438422, "latlng": [40.0, -4.0], "demonym": "Spanish", "area": 505992.0, "gini": 34.7, "timezones": ["UTC", "UTC+01:00"], "borders": ["AND", "FRA", "GIB", "PRT", "MAR"], "nativeName": "España", "numericCode": "724", "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "€" }], "languages": [{ "iso639_1": "es", "iso639_2": "spa", "name": "Spanish", "nativeName": "Español" }], "translations": { "de": "Spanien", "es": "España", "fr": "Espagne", "ja": "スペイン", "it": "Spagna", "br": "Espanha", "pt": "Espanha", "nl": "Spanje", "hr": "Španjolska", "fa": "اسپانیا" }, "flag": "https://restcountries.eu/data/esp.svg", "regionalBlocs": [{ "acronym": "EU", "name": "European Union", "otherAcronyms": [], "otherNames": [] }], "cioc": "ESP" }]



let pais = prompt("¿Cual es su país de origen?")

if (pais === "Spain") {

    document.write(`${test[0].callingCodes[0]} , ${test[0].region} , ${test[0].population}`);
} else {
    document.write(`Error`);
}



let alumnos = ["ana", "lina", "noel", "hector", "andreina", "sergio", "lluc", "agnes"]

let alumno = alumnos[3]

switch (alumno) {
    case 'ana':
        document.write("Pregunta a Ana");
        break;

    case 'lina':
        document.write("Lina lo sabe!");
        break;

    case 'noel':
        document.write("otra para Noel");
        break;

    default:
        document.write("Algo ha salido mal");
        break;
}
//Forma larga

let alumnoGenero;

if (alumno === "agnès") {
    alumnoGenero = "f"
} else {
    alumnoGenero = "m"
}

//Forma corta (operador ternario)

let alumnoGenero = alumno === "agnès" ? 'f' : 'm' // (alumno igual a agnes? si caso a /no caso b)


/* Bucles
trozo de código que se ejecuta varias veces

for: es un bucle que repite un trozo de codigo sobre una secuencia de elementos 
la pieza fundamental de un bucle for es un iterable que hay que definir de antemano con un numero fijo de iteraciones*/

for (let i = 0; i <= 10; i++) {//variable de la iteracion;condicion ; comportamiento de la variable
    console.log(i);
    for (let j = 0; j <= 10; j++) {
        console.log("hola", j);
    }
}
//Una funcionalidad nueva de ES6 es el bucle for of cuya estructura es for (let x of y) siendo y un iterable (array, strings)
let animales = ['🐖', '🐂', '🦙', '🐏', '🦑']
//of
for (let animal of animales) {
    console.log(animal)
}



let ciudad = {
    "nombre": "Bogotá",
    "población": "8M",
    "alcalde": "Peñalosa",
    "seguridad": "nula"
}
//in
for (let clave in ciudad) {
    console.log(clave)
}
for (let clave in ciudad) {
    console.log(ciudad[clave])
}


/* Bucle while: Es un bucle que itera siempre que se cumpla una condicion booleana*/

while (condicion booleana) {             //abrimos while seguido de (la condicion booleana entre parentesis)abrimos llave y cerramos
    //bloque de codigo que se ejecuta mientras la condicion sea true
}

let alumno = "hector";
while (!("hector" === "noel")) {//necesitamos que dentro del cuerpo del while algo altere a la condicion para que deje de ser true y el bucle acabe
    alumno = "noel"
    console.log("hola");
}
1 - Iniciar una variable
2 - condicion booleana que se debe cumplir
3 - algo que altere un componente de la condicion

let i = 0;

while (i < 10) {
    console.log("hola");
    i++;
}


let pass = prompt("Dime la pass: ");

while (pass != "aloha") {
    pass = prompt("Dime la pass: ");
}
document.write("Bienvenido!")


while (true) {
    pass = prompt("Dime la pass: ");
    if (pass === "aloha") {
        break;   //si break se llega a ejecutar el bucle se detiene
    }
}
document.write("Bienvenido!")



let i = 0;

while (i < 100) {
    if (i % 2 != 0) {
        i++;
        continue; // si continue se llega a ejecutar el bucle salta una vuelta
    }
    console.log(i)
    i++;
}


//Do...while

let pass;

do {
    pass = prompt("Dime la pass: ");
} while (pass != "aloha")

document.write("Bienvenido!")



/* Funciones:(tambien llamadas subrutinas o métodos si estamos en un objeto) Son la "unidad minima de la programacion" 
son un trozo de código que se puede utilizar cuando sea necesario*/

let born = prompt("En que año naciste?");

let actual = 2019;

function calculaEdad(factorConversion, anyoNacimiento) {  //lo que va entre paréntesis son argumentos que se introducen a la funcion 
    return (actual - anyoNacimiento) * factorConversion;
}

let edad = calculaEdad(1, parseInt(born));/*En ES6 puede especificar el nombre de la variable
let edad = calculaEdad(factorConversion = 1, anyoNacimiendo = parseInt(born));*/
console.log(edad)

function calculaEdad(anyoNacimiento, factorConversion = 1) {/*asignando un valor a una variable la convertimos en "opcional"
                                               si no especificamos otro valor adoptara el que tiene por defecto.*/
    return (actual - anyoNacimiento) * factorConversion;
}






let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let recuento = {};


for (let element of arr1) {
    if (recuento[element] === undefined) {
        recuento[element] = 1;
    } else {
        recuento[element] = recuento[element] + 1
    }
}


function getNumber(direction, frecuencia, comparacion) {
    let numb;
    for (let item in frecuencia) {
        if (direction === "up") {
            if (frecuencia[item] > comparacion) {
                comparacion = frecuencia[item];
                numb = {};
                numb[item] = frecuencia[item];
            }
        }
        else {
            if (frecuencia[item] < comparacion) {
                comparacion = frecuencia[item];
                numb = {};
                numb[item] = frecuencia[item];
            }
        }

    } return numb;
}

let myDirection = prompt("Dime")

if (myDirection === "up") {
    getNumber("up", recuento, arr1.length);
} else if (myDirection === "down") {
    getNumber("down", recuento, 0);
}



/*En un explorador el elemento "window" es el scope global*/
window.innerWidth
window.navigator


/* TIPOS DE FUNCIONES

1-Funciones declaradas(funciones que se declaran en un paso y se invocan en otro)

2-Funciones anónimas(a estas funciones no se les pone nombre, se ejecutan una sola vez)*/


setTimeout(function () { console.log("hola") }, 5000)


/*3- funciones flecha[ES6] */

setTimeout(() => { console.log("hola") }, 5000)

/*4- Function Expression */

const a = function () {
    console.log("hola")
}

a()
function a() {
    console.log("hola")
}



/*EVENTOS

Toda accion que ocurre cuando el usuario interactua de cualquier modo con la página, hay un tipo de evento distinto para cada tipo de interacción

Formas de introducir eventos:

1-En el html (inline)
2- addEventListener  (JS)  */

function showRespect() {
    document.write(`
        <img src="http://www.ciaocrossclub.it/root/discoremoto/Nik85/Ali%20G.jpg">
    `)
    return true;
}


let miBoton = document.querySelectorAll("body > button")[0]

miBoton.addEventListener(`click`, showRespect)




function showRespect(event){
    event.preventDefault()
    document.write(`
        <img src="http://www.ciaocrossclub.it/root/discoremoto/Nik85/Ali%20G.jpg">
    `)
    return true;
}
​
​
let miBoton = document.querySelectorAll("body > button")[0]
​
miBoton.addEventListener("contextmenu", () => {showRespect()})
