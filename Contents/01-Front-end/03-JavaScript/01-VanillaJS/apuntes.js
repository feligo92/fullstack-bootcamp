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
//Una funcionalidad nueva de ES6 es el bucle for of cuya estructura es for (let x of y) siendo "y" un iterable (array, strings)
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
// for in se utiliza para objetos

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




function showRespect(event) {
    event.preventDefault()
    document.write(`
        <img src="http://www.ciaocrossclub.it/root/discoremoto/Nik85/Ali%20G.jpg">
    `)
    return true;
}


let miBoton = document.querySelectorAll("body > button")[0]

miBoton.addEventListener("contextmenu", () => { showRespect() })

Math.round
Math.floor
Math.min
Math.max
Math.random

Math.round(Math.random() * 2)



/*MANIPULACIÓN DE DOM

DOM= document object model
es la representacion interna que hace el explorador de la página.
Con JS no manipulamos el html sino la representacion que tiene el explorador de la página.*/

//cuando queramos modificar el dom siempre empezaremos por "document."
document.getElementById = //te devulve un elemento por su id
    document.getElementsByClassName = //te devuelve un array con todos lo elementos de esa clase
    document.getElementsByTagName = //te devulve un array con todos los elementos con esa etiqueta
    document.querySelector("(cualquier propiedad)")//devuelve el primer elemento
document.querySelectorAll()//devuelve un array con todos los elementos por tanto SIEMPRE HAY QUE ESPECIFICAR EL INDICE


/*propiedades de los documentos del dom*/


let miButton = document.querySelectorAll("button")[0]

//ahora miButton es un objeto con propiedades propias del DOM, y se puede acceder a ellas como a las de cualquier objeto

miButton.style.backgroundColor = "red" //podemos acceder a sus propiedades de estilos y manipularlas

miButton.classList // devuleve un array con todas las clases

miButton.className// devulve una string con todas las clases con miButton.className="lo que quieras" podemos modificarla

miButton.innerText//devulve el texto que contiene   miButton.innerText="lo que quieras" podemos modificar el texto

miButton.innerHTML



/* Informacion persistida en el cliente

1-No sensible

2-Ocupar poco espacio


Cookies: trozo de informacion que se almacena temporalmente, se expresan en forma de "clave=valor"*/


document.cookie //nos devuleve un string con todas las cookies

LocalStorage//devuelve un objeto con toda la informacion alojada en el



/*LLAMADAS HTTP

Es una forma de comunicacion con un Backend

En una red de servidores los clientes inician la conversacion y hacen peticiones (recursos) a los servidores, 
los servidores responden con esos recursos y una vez terminada la conversacion se "olvidan" uno del otro.(estos son los principios de la arquitectura REST)
Por cada recurso hay una peticion y una respuesta.

Como hacer la peticion HTTP y que hacer con la respuesta.

Hay servidores que devuelven archivos (ejemplo html)

        ||
       _||_
       \  /
        \/
        
Una web API es un servidor que solo devuelven datos 

La web API nos devulve los datos en diferentes notaciones.

JSON
XML
YAML


Peticiones HTTP,Hay cerca de una docena de peticiones pero las mas usadas son:
Operaciones CRUD=Create, read, update, delete
1-GET con esta peticion solicitamos datos a la web api.
2-POST con esta peticion solicitamos que guarde un dato. POST--> info(body)
3-DELETE con esta peticion solicitamos que borre un dato guardado.
4-PUT con esta peticion solicitamos que modifique un dato. PUT -->(body)*/


//1-GET
//MODELO PETICION GET CON CALLBACK
function httpGet(theUrl, callback) {

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl);

    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")

    xmlHttp.send();
}

function imprime(texto) { //callback
    console.log(texto)




    //2-POST 

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            console.log(xmlHttp.responseText);
    }
    xmlHttp.open("POST", "URL");

    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")

    xmlHttp.send(JSON.stringify({ "hola": "mundo" }));

    //Obtener la respuesta del post parseada a JSON
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {

        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)

            console.log(JSON.parse(xmlHttp.responseText))
    }
    xmlHttp.open("POST", "https://reqres.in/api/register");

    xmlHttp.setRequestHeader("Content-Type", "application/json")

    xmlHttp.send(JSON.stringify({
        "username": "eve.holt@reqres.in", "password": "pistol"
    }));




    //-3 DELETE
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            console.log(xmlHttp.responseText);
    }
    xmlHttp.open("DELETE", "https://feligo.free.beeceptor.com");

    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")

    xmlHttp.send();


    //4-PUT

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            console.log(xmlHttp.responseText);
    }
    xmlHttp.open("PUT", "URL");

    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")

    xmlHttp.send(JSON.stringify({ "hola": "mundo" }));




    /*Funciones prototípicas: 
    
    Cuando creamos un array o un string creamos un objeto a partir del prototipo del tipo de dato que estamos creando.
    Este prototipo contiene multitudde propiedades y de funciones propias (.length por ejemplo)
    
    Funciones prototipicas de los arrays : a las funciones propias del prototipo se les llama métodos.*/
    // https://www.w3schools.com/jsref/jsref_map.asp

    //CONCAT 
    array.concat()-- > //sirve para concatenar 2 strings, nombre del primer array.concat(2º array) esto genera un 3r array suma de los 2
        let arr3 = arr1.concat(arr2)

    let arr4 = arr1.concat(arr2, arr3)//se pueden concatenar tantos arrays como se quiera separándolos con comas

    //FILL (muta)
    array.fill(x)-- >//cambia todos los valores de un array al valor especificado

        //UNSHIFT PUSH (mutan)

        array.unshift(x)-- >//añade elementos al principio de un array
        array.push(x)-- >//añade elementos al final de un array

        //POP (muta)

        array.pop()-- >//Elimina el último elemento de un array

        //INDEXOF

        array.indexOf("x")-- >// Introducimos como argumento un valor del array y nos devuelve su índice. Si un elemento no existe en un array
        //su indice sera -1

        //SLICE (muta)

        array.slice(x, y)-- >// Introducimos como argumento 2 posiciones del array
        //obtendremos un array nuevo que habra recortado el primero desde la primera posicion(incluida) hasta la segunda (no incluida)

        //SPLICE (muta)

        array.splice(x, y, "a", "b")-- > //los strings son los elementos que quieres introducir
        // x= punto de inicio
        //  y= cuantos elementos quieres reemplazar
        //podemos introducir elementos sin borrar ninguno de los existentes o eliminar elementos sin introducir nuevos
        array.splice(array.indexOf("a"), 1) // podemos eliminar un elemento en concreto sin conocer su indice

    //forEACH ES6

    array.forEach(function)-- >//Introducimos una funcion como argumento que se aplicara a cada uno de los elementos del array

        let fruits = ["apple", "orange", "cherry"];
    fruits.forEach((elemento) => { console.log(elemento) }) //podemos imprimir cada elemento

    let fruits = ["apple", "orange", "cherry"];
    fruits.forEach((elemento) => { console.log(elemento[0]) })//o como un string se comporta podemo obtener la primera letra de cada uno por ejemplo

    let fruits = ["apple", "orange", "cherry"];
    fruits.forEach((elemento, i) => { console.log(elemento) })//imprimiremos cada elemento y su posicion

    var fruits = ["apple", "orange", "cherry"];// la funcion que pasamos como argumento puede ser declarada
    fruits.forEach(myFunction);

    function myFunction(item, index) {
        document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
    }

    //MAP

    var numbers = [4, 9, 16, 25];
    numbers.map((element) => { return element / 2 })//obtenemos un NUEVO array divido por 2 

    let arrayDividido = numbers.map((element) => { return element / 2 })//


    //FILTER (muta)

    var numbers = [4, 9, 16, 25];       //con filter filtramos los elementos en funcion de una condicion booleana
    numbers.filter((element) => {        // solo nos devuelve aquellos que han superado la prueba
        if (element % 2 == 0) {
            return true
        } else {
            return false
        }
    })

    //SORT (muta)

    let fruits = ["apple", "orange", "cherry"];

    fruits.sort()       //si no pasamos argumento nos ordena el array alfabeticamente  si son strings 


    var numbers = [4, 9, 16, 25, 1, 300, 23, -60];

    numbers.sort((element1, element2) => { return element1 - element2 });//ordenar numeros creciente
    numbers.sort(function (a, b) { return a - b });//ordenar numeros creciente

    numbers.sort((element1, element2) => { return element1 - element2 });//ordenar numeros decreciente
    numbers.sort(function (a, b) { return a - b });//ordenar numeros decreciente

    //JOIN 

    array.join("") //genera un string con los elementos del array reparandolos por el argumento entre comillas
    //si no introduces argumento se separa con comas por defecto

    var numbers = [4, 9, 16, 25, 1, 300, 23, -60];
    numbers.join(`.`)

    //Funciones prototipicas de los strings: https://www.w3schools.com/jsref/jsref_obj_string.asp

    //CONCAT
    //concatena strings
    //no modifica los strings originales asi que hay que guardarlo en una variable
    var str1 = "Hello ";
    var str2 = "world!";
    var res = str1.concat(str2);


    //INDEXOF
    //sirve para encontrar una match literal
    var str = "Hello world, welcome to the universe.";
    var n = str.indexOf("welcome"); //devuelve la posicion de la primera letra (la posicion empieza por 0)
    str.indexOf("welcome") > -1 //indica si la posicion es 0 o superior y por tanto aparece en el string
        ||
        str.includes("welcome") //comprueba si aparece en el string, devuelve booleano

    /*En ocasiones no nos interesa encontrar una ocurrencia en concreto sino que buscaremos PATRONES
    REGEX = regular expressions*/



    //REPLACE

    var str = "Hello world, welcome to the universe.";
    var n = str.replace("world", "dude") //antes de la coma va el valor a reemplazar, despues de la coma va el valor que reemplaza
    var n = str.replace(/ /, "dude")// se puede indicar como string buscando un match literal o una REGEX

    //MATCH

    var str = "Hello world, welcome to the universe.";
    var n = str.match(/welcome/i); //la i es un modificador llamado (insensitive) para que no tenga en cuenta mayus o minus

    var str = "Hello world, welcome to the universe.Hello world, welcome to the universe.Hello world, welcome to the universe.";
    var n = str.match(/welcome/ig); // la g es un modificador llamado (global) que hara que nos devuelva todas las coincidencias

    // var str = "Hello world, welcome to the universe.Hello world, welcome to the universe.Hello world, welcome to the universe.";
    // var n = str.match(/welcome/igm) // la m es un modificador llamado (multiline) para que no tenga en cuenta el salto de linea


    var str = "Hello world, welcome to the universe.";
    var n = str.match(/[a-h]/gim)     //hacemos un intervalo y nos retorna todas las coincidencias tanto para letras como para números.


    var numbers = "De sol, espiga y 23 deseo Son sus manos 1en mi pelo De nieve huracán y abismos76 El sitio de mi recreo";
    var n = numbers.match(/[0-9]/gim)

    var str = "Hello world, welcome to the universe.";
    var n = str.match(/[a-h][a-h]/gim)          //asi buscamos 2 letras de la a hasta la h que esten juntas

        / [a - z][a - z][a - z][a - z][a - z] / //comprueba que haya 5 letras juntas
        /[0-9][0-9][0-9][0-9][0-9]/  //comprueba que haya 5 letras juntas
        / [0 - 9][0 - 9][0 - 9][0 - 9][0 - 9][0 - 9][0 - 9][0 - 9] - ([a - z] | [A - Z]) / // ([a-z]|[A-Z]) asi buscamos una letra de la a-z en mayuscula o en minuscula
        /[^0-9]/ //todo lo que no sea un numero del 0 al 9
        /^ [0 - 9] / //buscamos un numero del 0 al 9 que sea el inicio del string

        //Metacarácteres

        //simbolos que representan algo especial en terminologia de REGEX

        /./ //el punto significa qualquier cosa caracteres especiales incluidos
        /.[0 - 9] / // aqui obtendriamo POR PARES todos los caracteres que tengan un numero a su derecha 
        / \./ // con \. buscamos literalmente un punto, lo haremos con cualquier metacaracter

        ^ // significa que buscamos el inicio del string
        [^ X] // significa lo contrario de X
        $ // significa que buscamos el final del string
        / ^ hola$ / //buscamos inicio y final del string

        / \w / //encuentra solo letras y numeros
        / \W / // encuentra cualquier caracter que no sea alfanumérico
         / \d / // encuentra un dígito
         / \D / // todo lo que no sea número
         / \s / // busca espacios en blanco
         / \S / // busca todo lo que no sean espacios en blanco
         / \t / // busca tabulaciones
         / [^\t] / // busca todo lo que no sean tabulaciones  


                    //Cuantificadores

                    //Los utilizamos para indicar cuantos resultados buscamos

                    /[0-9]{8}/ //indicamos que buscamos 8 coincidencias de numeros del 0 al 9

                    / [0 - 9]{ 8 } / = /\d{ 8 } /

                        /\d{ 5, 8 } /   / / así indicamos un intervalo expresando el menor y el mayor ambos incluidos

                            /\d * / / / cualquier número de veces que se repita la ocurrencia

                                //look ahead
                                / (?=\d). //devuelve cualquier cosa que cumpla la condicion despues del igual
    /(?=.*?[a-z]) (?=.*?[A-Z]) (?=.*?\d) (?=.*?\W).* / // buscamos que tenga una minuscula, mayuscula, numero y caracter especial

        / (?=.*? [a - z])(?=.*? [A - Z])(?=.*?\d)(?=.*?\W).{ 8,} / / /


//SPLIT

var str = "Hello world, welcome to the universe.";//obtenemos un array de strings cortando por el argumento de la funcion .split("")
    var n = str.split(" ")



    ______________________________________________________________________________________________________________________________


    //FECHAS:

    let fecha = {
        "año": 10,
        "mes": 10,
        "dia": 23,
        "incrementarDia": function () {
            this["dia"]++;
        }
    }


    //NEW DATE

    let now = new Date() //nos retorna un objeto con la fecha exacta del momento en que se creó

    la funcion Date()// sirve para crear fechas en JS, si no le pasas argumento genera un fecha con el instante en que se invocó la función.

    /*podemos modificar la fecha pasandole argumentos*/
            //año   mes   dia hora minuto segundo milisegundos
    new Date("2019","10","08","10","15",  "33",     "340")

    new Date("2018-10-09 12:00:12:239")




    ______________________________________________________________________________________________________________________________

    //ASINCRONÍA

    //Promesas: 

  //Llamada para promesas:
    function httpGet(theUrl)
    {
        let miPromesa = new Promise((resolve, reject) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                resolve(xmlHttp.responseText);
            }
        xmlHttp.open("GET", theUrl, true); 
        xmlHttp.send(null);
    })

     return miPromesa;
    }


    //Callbacks
httpGet('https://anapioficeandfire.com/api/books/1', 
(dataBook) => {
	let book = JSON.parse(dataBook);
	console.log(book["name"])
	httpGet(book["characters"][0], 
		(characterData) => {
			let character = JSON.parse(characterData);
			console.log(character["name"])
		}
	)	
})
​
//Promises

function httpGet(theUrl) {
    let miPromesa = new Promise((resolve, reject) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                resolve(xmlHttp.responseText);
            } else if (xmlHttp.readyState == 4) {
                reject(xmlHttp.responseText);
            }
        }
        xmlHttp.open("GET", theUrl, true);
        xmlHttp.send(null);
   
    })
    return miPromesa;
}




httpGet("https://anapioficeandfire.com/api/books/1")
.then(JSON.parse)
.then((book) => {return httpGet(book["characters"][0])})
.then(JSON.parse)
.then((character) => {console.log(character['name'])})



//VERSIONES DE ES6

//Features propias de ES6

/*Parámetros predefinidos para los argumentos de las funciones.*/ function hola (a=1)
//Template literals
// let / const
// forEach
//for...of/ for ...in
// promises
/* spread operator*/ function hola (...arg){}
//funciones flecha la function arrow conserva el this
let hola= {
    "tamaño":24,
    "color": "blanco",
    "remodelar": function(){
        setTimeout(() =>{
            this.color="rojo";
        }, 3000) 
    }
}

//asignación por destructuring

let alumno1 = "lina"
let alumno2 = "noel"

let alumnos = {"alumno1" : alumno1, "alumno2" ; alumno2} //escturcturing

let alumnos = { "alumno1" : "lina" , "alumno2" : "noel"  }//destructuring
let{alumno1,alumno2}= alumnos


let array1= ["rojo", "azul","rojo"]

let [rotu1,rotu2,rotu3] = array1

/*Módulos

Se utilizan para fragmentar el código e importarlo por partes para mantenerlo ordenado.*/

en el archivo de origen indicamos que exportamos export{funcion}
en el archivo de destino indicamos que importamos y de donde viene import{funcion} from 'ruta relativa'
en el html la etiqueta <script type="module" src=""></script>
para que esto funcione hay que abrirlo en un servidor.

/*clases
Es un plantilla para crear objetos*/

class Casa {
    "ciudad"="Barcelona";
    "paredes"= 4
}

let chalet = new Casa //chalet sera una instancia de la clase Casa


class Casa {
    constructor(ciudadDeclarada){  
        this.ciudad = ciudadDeclarada
    }
    paredes = 4
}                                       //CONSTRUCTOR es la funcion que permite setear las claves a partir de los argumentos de new Casa()

let chalet = new Casa("Madrid");
let piso = new Casa("Valencia");


class Casa {

    #arquitecto="";

    constructor(ciudadDeclarada,arquitectoDeclarado){  
        this.ciudad = ciudadDeclarada               //asi declaramos la propiedad arquitecto como privara y no se puede manipular
        this.#arquitecto = arquitectoDeclarado
    }
    paredes = 4
}

class Casa {

    #arquitecto="";

    constructor(ciudadDeclarada,arquitectoDeclarado){  
        this.ciudad = ciudadDeclarada              
        this.#arquitecto = arquitectoDeclarado
    }
    setArquitectoDeclarado(arquitectoDeclarado){ // con esta funcion podemos cambiar el valor a la clase privada
        this.#arquitecto = arquitectoDeclarado;
    }
    getArquitectoDeclarado(){  // con esta funcion conseguimos que nos retorne el valor de la clave privada
       return this.#arquitecto;
    }

    paredes = 4
}


class Piso extends Casa{            //esta clase tendra todo lo que tiene la clase Casa mas sus propiedades
    planta = 0;
    constructor(ciudadDeclarada,arquitectoDeclarado,plantaDeclarada){//contructor recibe como argumentos los de Casa+Piso
        super(ciudadDeclarada,arquitectoDeclarado)  //super recibe como argumentos los argumentos que recibia Casa
        this.planta = plantaDeclarada;
    }
}


/*Programar para exploradores obsoletos

POLYFILLS

para poder utilizar features de versiones no soportadas por el explorador podemos utilizar unas librerias llamadas polyfill

corejs es el polyfill  que cubre mas funcionalidades

TRANSPILAR

Compilación del código entre lenguajes de un mismo nivel.

El transpilador mas conocido es BABEL*/



 //PARADIGMAS DE PROGRAMACIÓN
// Hay lenguajes que solo aceptan un paradigma y otros permiten que el programador escoja
/*Son estilos de programación, un conjunto de reglas que hacen "mejor" el código.

                                            paradigmas de programación
                                                      |
                                                      |
                                                      |                
                ______________________________________|_________________________________________________________
                |                                                                                               |
            imperativa                                                                                      Declarativa
        (definimos paso a paso)                                                     (creamos una estructura de código que resuleve muchos problemas)
 (paso a paso como hacer un pollo asado)                                                                 (quiero un pollo asado)
                |                                                                                               |
    ____________|_____________                                                            ______________________|__________________
    |                         |                                                           |                                        |
Procedural          Programacion orientada a objetos                                   Logical                                  Funcional
(funciones que         (clases encapsuladas)                                     Programacion basada                 programacion basada en funciones deterministas
 se invocan       Principios basicos encapsulacion y herencia                  en estructuras logicas                  Las funciones tienen que ser puras ( sin side effects)
  entre si)         Inyeccion de dependencias                                                                                     No global variables
                                                                                                                              Inmutabilidad de las variables
                                                                                                                             (referencial transparency)

