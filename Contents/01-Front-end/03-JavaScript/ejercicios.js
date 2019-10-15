//Ejercicio 1

let numeros = []
for (let i = 1; i <= 100; i++) {
    numeros.push(i);

}
console.log(numeros)



//Ejercicio 2

let numeros = []
let numerosPares = []
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        numerosPares.push(i);
    }
    numeros.push(i);

}
console.log(numeros)
console.log(numerosPares)


//Ejercicio 3

const animales = ["elefante", "perro", "ballena"]
const pesos = [5000, 50, 20000]
let contador = -1
for (let i of animales) {
    contador++
    if (i === "perro") {

        console.log(`${animales[contador]} , ${pesos[contador]}`);
    }
}

const animales = ["elefante", "perro", "ballena"]
const pesos = [5000, 50, 20000]
for (let i = 0; i < animales.length; i++) {
    if (animales[i] === "perro") {

        console.log(`${animales[i]} , ${pesos[i]}`);
    }
}

//Ejercicio 4

const animales = ["elefante", "perro", "ballena"]
const pesos = [5000, 50, 20000]
let contador = -1
for (let peso of pesos) {
    contador++;
    if (peso > 1000) {
        console.log(`Animales grandes , ${animales[contador]} `);
    }
}

const animales = ["elefante", "perro", "ballena"]
const pesos = [5000, 50, 20000]
for (let i = 0; i < pesos.length; i++) {
    let peso = pesos[i]
    let animal = animales[i]
    if (peso > 1000) {
        console.log(`Animales grandes , ${animales[i]} `);
    }

}


//Ejercicio 5

let letras = []
let palabra = "pizarra"

for (let i = 0; i < palabra.length; i++) {
    if ((i + 1) % 2 === 0) {
        letras.push(palabra[i]);
    }

}
console.log(letras);


//Ejercicio 6

let precios = ["2€", "1,2€", "4€", "1.000.000€", "0,5"]
let productos = ["Naranjas", "Leche", "Cereales", "Deportivo Ferrari", "Sangre de unicornio"];
const producto = "Naranjas"

switch (producto) {
    else if productos[0]:
    document.write(precios[0]);
break;

    else if productos[1]:
    document.write(precios[1]);
break;

    else if productos[2]:
    document.write(precios[2]);
break;

    else if productos[3]:
    document.write(precios[3]);
break;

    else if productos[4]:
    document.write(precios[4]);
break;

    default:
document.write("Algo ha salido mal");
break;
}


/*7. Vamos a contar ovejitas. Primero fijaremos un número máximo, por ejemplo:
const max_number = 12
Ahora, haced un bucle que imprima en la consola el mensaje:
"1 ovejita…"
"2 ovejitas…"
"3 ovejitas"...
…
etc
Hasta llegar al número máximo de ovejitas.
NOTA: ¡fijaros que el mensaje que se imprime en la primera
iteracción es distinto del resto de mensajes! */


const max_Number = 13

for (let i = 1; i <= max_Number; i++) {
    if (i == 1) {
        document.write("<h1>1 ovejita</h1> <br>");
    } else {
        document.write(` ${i} ovejitas<br>`);
    }
}


/*8. No me gusta el brócoli. Tengo unas cuantas listas de ingredientes para recetas que incluyen brócoli entre ellos, por ejemplo:
const tacos = ["carne", "frijoles", "pimiento verde", "brocoli""]
const sopa = ["fideos", "brocoli", "caldo", "pollo"]
const pizza = ["masa", "base de tomate", "brocoli", "bacon", "queso"]
Finalmente, tengo una lista de la compra donde voy a ir añadiendo los ingredientes que necesito comprar, EXCEPTO el brócoli. 
let lista_compra = []
Haced un bucle que recorra el array tacos, 
y en cada iteracción vaya pusheando los ingredientes al array lista_compra siempre que dicho ingrediente no sea el "brocoli". 
Luego usad el mismo bucle con los otros 2 arrays. Finalmente, imprimid en la consola el array lista_compra después de todo el proceso.*/

const tacos = ["carne", "frijoles", "pimiento verde", "brocoli"];
const sopa = ["fideos", "brocoli", "caldo", "pollo"];
const pizza = ["masa", "base de tomate", "brocoli", "bacon", "queso"];
let lista_compra = [];

for (producto of tacos) {
    if (!(producto == "brocoli")) {
        lista_compra.push(producto);
    }
}
for (producto of sopa) {
    if (!(producto == "brocoli")) {
        lista_compra.push(producto);
    }
}
for (producto of pizza) {
    if (!(producto == "brocoli")) {
        lista_compra.push(producto);
    }
}
console.log(lista_compra);



/*9. Partiendo de un número cualquiera, por ejemplo el 7, 
queremos calcular la multiplicación de todos los números que hay por debajo de éste (sin contar el cero). Por ejemplo:
1*2*3*4*5*6*7 = 5.040
A este cálculo en matemáticas se le llama factorial. El factorial de 7, como acabamos de ver, es 5040.
Haced un bucle que me calcule el factorial del número 10 y lo imprima en la consola.*/
let numero = prompt("Escribe un numero")
let total = 1

for (i = 0; i < numero; i++) {

    total = total * (numero - i);
}

console.log(`${numero}! es ${total}`);


/*10. La función Object.keys() nos devuelve un array con las claves de un objeto que le pongamos entre los paréntesis. Por ejemplo:
const mi_objeto = {"hola": "greetings", "adios": "bye"}
Object.keys(mi_objeto)
//me retornará el siguiente array: ["hola", "adios"]
De esta forma, podemos iterar sobre las claves de un objeto, de la siguiente forma:
for(let i=0; i<Object.keys(mi_objeto).length; i++){
    let clave = Object.keys(mi_objeto)[i];
    console.log(mi_objeto[clave]);
}
Lo cual nos imprimirá en la pantalla "greetings", "bye".
Ahora os toca a vosotros. Tengo un objeto con el nombre de algunos países como claves y su población total como valores:
const poblaciones = {
    "españa": 47000000,
    "italia": 61000000,
    "francia": 67000000,
}
Haced un bucle que imprima en la consola aquellos países que tengan una población superior a 60000000 personas.
Contraer
*/


const poblaciones = {
    "españa": 47000000,
    "italia": 61000000,
    "francia": 67000000
}
for (let i = 0; i < Object.keys(poblaciones).length; i++) {
    let clave = Object.keys(poblaciones)[i];
    let poblacion = poblaciones[clave]
    if (poblacion > 60000000) {
        console.log(clave);
    }
}






for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(`${i} FizzBuzz <br>`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz <br>`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz <br>`);
    }
}


let number1 = prompt("escriba una numero")
let number2 = prompt("escriba una numero")

if (parseInt(number1) > parseInt(number2)) {
    document.write(`${number1} es mayor que ${number2}`)
} else if (parseInt(number1) < parseInt(number2)) {
    document.write(`${number2}es mayor que ${number1}`)
} else {
    document.write(`Son iguales`)
}



let number1 = prompt("escriba una numero")
let number2 = prompt("escriba una numero")
let numero1 = parseInt(number1)
let numero2 = parseInt(number2)
if (numero1 > numero2) {
    document.write(`${numero1}es mayor que ${numero2}`)
} else if ((numero1 < numero2)) {
    document.write(`${numero2}es mayor que ${numero1}`)
} else {
    document.write(`Son iguales`)
}









//****************Comprobar palíndromo


let palabra = prompt("escribe una palabra: ");
let word = []
let reverseWord = []
let palindromo = true;
for (let i = 0; i < palabra.length; i++) {
    word.push(palabra[i]);
    reverseWord.push(palabra[palabra.length - 1 - i]);

} for (let j = 0; j < palabra.length; j++) {

    if (word[j] != reverseWord[j]) {
        palindromo = false
    }
}
if (palindromo) {
    document.write(`${palabra} es un palíndromo`);
} else {
    document.write(`${palabra} no es un palíndromo`);
}
______________


let palabra = prompt("escribe una palabra: ");

let palindromo = true;
for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] != palabra[palabra.length - 1 - i]) {
        palindromo = false;

    }
}
if (palindromo) {
    document.write(`${palabra} es un palíndromo`);
} else {
    document.write(`${palabra} no es un palíndromo`);
}

______________


let palabra = prompt("escribe una palabra: ");
let word = []
let reverseWord = []
for (let i = 0; i < palabra.length; i++) {
    word.push(palabra[i]);
    reverseWord.push(palabra[palabra.length - 1 - i]);
}

word = word.join('');
reverseWord = reverseWord.join('')

if (word == reverseWord) {
    document.write(`${palabra} es un palíndromo`);
} else {
    document.write(`${palabra} no es un palíndromo`);
}


//*********************Cifrazo César

let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let palabra = prompt("intodruce tu palabra: ")

let word = ""

for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] != " ") {
        for (let j = 0; j < letras.length; j++) {

            if (palabra[i] === letras[j]) {
                word += letras[(j + 7) % 26];

            }
        }
    }
} document.write(word)


_________________


let mensaje = prompt("Escribe una palabra");
let abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let mensajeCifrado = "";
for (let letra of mensaje) {
    for (i = 0; i < abecedario.length; i++) {
        if (letra === abecedario[i]) {
            mensajeCifrado += abecedario[(i + 7) % 26]
        }
    }
}
console.log(mensajeCifrado)


/*1. Tengo un objeto con el nombre de algunos alimentos como claves y su número de calorías como valores:

const calorias = {
    "ensalada":152,
    "hamburguesa":295,
    "patatas fritas":312,
    "frankfurt": 269 
}

Haced un bucle que imprima en la consola aquellos alimentos con menos de 300 calorías.*/


const calorias = {
    "ensalada": 152,
    "hamburguesa": 295,
    "patatas fritas": 312,
    "frankfurt": 269
}
for (let i = 0; i < Object.keys(calorias).length; i++) {
    let clave = Object.keys(calorias)[i];
    let valor = calorias[clave]
    if (valor < 300) {
        console.log(clave);
    }
}


______________

const calorias = {
    "ensalada": 152,
    "hamburguesa": 295,
    "patatas fritas": 312,
    "frankfurt": 269
}
for (let clave in calorias) {
    if (calorias[clave] <= 300) {
        console.log(clave, calorias[clave])
    }
}


/*5. Usando el mismo objeto del ejercicio anterior,
 haced otro bucle que imprima sólo el alimento con más calorías de todos.*/

const calorias = {
    "ensalada": 152,
    "hamburguesa": 295,
    "patatas fritas": 312,
    "frankfurt": 269
}
let alimento = ""//nombre del alimento más calórico
let alimentoCaloria = 0 //calorías del aliment más calórico
let claves = Object.keys(calorias)

for (let i = 0; i < claves.length; i++) {
    let clave = claves[i]
    let caloria = calorias[clave]
    if (caloria > alimentoCaloria) {
        alimento = clave;
        alimentoCaloria = caloria
    }

} console.log(`${alimento} ${alimentoCaloria}`)



/*6. Tengo un array de objetos, donde cada objeto representa una persona. Mi array es el siguiente:

[
   {"nombre": "Marco Aurelio", "edad": 59, "ocupacion": "emperador"},
   {"nombre": "Ada Lovelace", "edad": 36, "ocupacion": "primera programadora de la historia"},
   {"nombre": "Aragorn, Rey de Gondor", "edad": 210, "ocupacion": "Rey"},
   {"nombre": "Jeff Bezos", "edad": 55, "ocupacion": "Fundador de Amazon"}
]

Haced un bucle que vaya imprimiendo uno a uno los nombres de cada persona en la consola. 

Luego cread un segundo array vacío:

const nuevos_personajes = []

Haced otro bucle que recorra cada persona. Si esa persona tiene menos de 55 años,
lo pusheamos (recordad la función .push)
al nuevo array. Finalmente, imprimir el nuevo array en la consola.*/

let tabla = [
    { "nombre": "Marco Aurelio", "edad": 59, "ocupacion": "emperador" },
    { "nombre": "Ada Lovelace", "edad": 36, "ocupacion": "primera programadora de la historia" },
    { "nombre": "Aragorn, Rey de Gondor", "edad": 210, "ocupacion": "Rey" },
    { "nombre": "Jeff Bezos", "edad": 55, "ocupacion": "Fundador de Amazon" }
]

for (i = 0; i < tabla.length; i++) {
    let name = tabla[i]
    console.log(`${name["nombre"]}`)
}

__________

let tabla = [
    { "nombre": "Marco Aurelio", "edad": 59, "ocupacion": "emperador" },
    { "nombre": "Ada Lovelace", "edad": 36, "ocupacion": "primera programadora de la historia" },
    { "nombre": "Aragorn, Rey de Gondor", "edad": 210, "ocupacion": "Rey" },
    { "nombre": "Jeff Bezos", "edad": 55, "ocupacion": "Fundador de Amazon" }
]
let nuevos_personajes = []

for (i = 0; i < tabla.length; i++) {
    let name = tabla[i]
    if (name["edad"] >= 55) {
        nuevos_personajes.push(name)
    }
} console.log(nuevos_personajes)



/*7. Crear un bucle que recorra la palabra "supercalifragilisticoespialidoso". En cada iteracción,
 cambiará cada letra por la letra que haya 7 posiciones más hacia la derecha en el abecedario.*/

let palabra = "supercalifragilisticoespialidoso"

let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let word = ""

for (let i = 0; i < palabra.length; i++) {
    {
        for (let j = 0; j < letras.length; j++) {

            if (palabra[i] === letras[j]) {
                word += letras[(j + 7) % 26];

            }
        }
    }
} document.write(word)







/*Usando los datos sacados de esta URL: https://pokeapi.co/api/v2/pokemon/pikachu/

Imprimir en la pantalla el nombre de todos los movimientos de Pikachu.*/



for (i = 0; i <= pokemon["moves"].length; i++) {
    document.write(`${pokemon["moves"][i]["move"]["name"]}<br>`)
}


/*1. Write a simple JavaScript program to join all elements of the following array into a string.
Print in three different ways (depending on a variable). You can use the array function "join".
Sample array : myColors = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/


let myColors = ["Red", "Green", "White", "Black"]
let colors = myColors.join(",")
document.write(colors)

let lala = "la la la la la la la la "
let la = lala.split(" ")
document.write(la)


/*2. Write a JavaScript program to remove an element of the array using the array function SPLICE.
 The element to be removed should be stored in a variable.*/

let myColors = ["Red", "Green", "White", "Black"]

let colors = myColors.splice(0, 2, "Yellow", "Purple")
document.write(myColors)

/*3. Write a JavaScript program to find the MOST or the LEAST frequent item of an array, 
depending on a variable type ("most" or "least").
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )*/

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let recuento = {};
let frecuenciaMax = 0;
let most = {};
let least = {};

for (let element of arr1) {
    if (recuento[element] === undefined) {
        recuento[element] = 1;
    } else {
        recuento[element] = recuento[element] + 1
    }
}

for (let item in recuento) {
    if (recuento[item] > frecuenciaMax) {
        frencuenciaMax = recuento[item];
        most = {};
        most[item] = recuento[item];
    }
} console.log(most);


for (let item in recuento) {
    if (recuento[item] < frencuenciaMax) {
        frencuenciaMax = recuento[item];
        least = {};
        least[item] = recuento[item];
    }
}

//Comentar el código !!!!!!!!

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let recuento = {};

let frecuenciaMasAlta = 0;
let masAlto;

let masBajo;

for (let element of arr1) {
    if (recuento[element] === undefined) {
        recuento[element] = 1;
    } else {
        recuento[element] = recuento[element] + 1;
    }
}

for (let item in recuento) {
    if (recuento[item] > frecuenciaMasAlta) {
        frecuenciaMasAlta = recuento[item];
        masAlto = {};
        masAlto[item] = recuento[item];
    }
}

for (let item in recuento) {
    if (recuento[item] < frecuenciaMasAlta) {
        frecuenciaMasAlta = recuento[item];
        masBajo = {};
        masBajo[item] = recuento[item];
    }
}

___________________________________________________________



let joselito = prompt("Escribe un numero");
function div(jose) {
    let divNumb = jose / 100
    return divNumb
}
document.write(div(joselito));


function divide(numero1) {

    function calculaNegativo(numero) {
        return numero * -1;
    }
    let numero2 = calculaNegativo(numero1)
    return numero2 / 100;
}





/*1.- Crear una función que recibe un array de strings y una string y devuelve la posición en donde está esa string en el array.
Ejemplo:
miFuncion([“hola”, “mundo”], “mundo”) debería retornar 1
*/
let arrUnoDos = ["uno", "dos"];
let strTres = "dos";



function getPosition(array, string) {
    let position;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            position = i;
        }
    }
    return position;
}




/*
2.- Crear una función que recibe un array de tres números y devuelve true si el primero es igual al segundo o si el segundo es igual al tercero. Si el segundo número es 4, siempre devuelve false.
Ejemplo:
miFuncion([1,2,3]) debería retornar false
miFuncion([1,1,3]) debería retornar true
miFuncion([1,4,3]) debería retornar false*/

function comparar(array) {
    let flag = false;
    if (array[1] === 4) {
        flag = false;

    } else if ((array[0] === array[1]) || (array[1] === array[2])) {
        flag = true;
    }
    return flag;
}


let arr1 = [1, 2, 3];
let arr2 = [1, 1, 3];
let arr3 = [1, 4, 3];


comparar(arr2)

/*3.- Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/



function tellFortune(job, location, partner, kids) {
    return (`You will be a ${job} in ${location}, and married to ${partner} with ${kids} kids.`)
}


let arrJob = ["Baker", "Detective", "Latin Lover"];
let arrLocation = ["Antananarivo", "Cali", "Bogotá"];
let arrPartner = ["Agnès", "Lluc", "Noel"];
let arrKids = [1, 2, 3];

console.log(tellFortune(arrJob[1], arrLocation[0], arrPartner[0], arrKids[2]))
console.log(tellFortune(arrJob[0], arrLocation[2], arrPartner[1], arrKids[2]))
console.log(tellFortune(arrJob[2], arrLocation[1], arrPartner[2], arrKids[1]))




/*4.- You know how old your dog is in human years, but what about dog years? Calculate it!

- Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.*/

function edadPerro(edad) {
    edad = edad * 7
    return (`Your doggie is ${edad} years old in dog years!`)
}

edadPerro(2)




/*6.- Crea una función llamada CelsiusToFahrenheit que acepte un argumento (la temperatura en grados Celsius) y
te devuelva la temperatura equivalente en grados fahrenheit.*/

/*7.- Ahora crea una función llamada FahrenheitToCelsius que haga exactamente lo opuesto (aceptará como argumentos los grados Fahrenheit 
y te devolverá los grados Celsius.
Ahora haz una función llamada “convertTemperature” que aceptará 2 argumentos:
Un número que representará unos grados
Un string que será “Fahrenheit” o “Celsius”.*/

function CelsiusToFarenheit(temperatura) {


    var resultado = (temperatura - 32) / 1.8;

    return (`${temperatura} grados Farenheit son ${resultado} grados Celsius`);
}


function FarenheitToCelsius(temperatura) {

    var resultado = temperatura * 1.8 + 32;
    return (`${temperatura} grados Celsius son ${resultado} grados Farenheit`)
}



function convertTemperature(temperatura, unidad) {
    let grados = "";
    if (unidad === "celsius") {
        grados = CelsiusToFarenheit(temperatura);

    } else if (unidad === "farenheit") {
        grados = FarenheitToCelsius(temperatura);
    }
    return grados;
}



function convertTemperature(temperatura, unidad) {

    if (unidad === "celsius") {
        var resultado = (temperatura - 32) / 1.8;
    } else if (unidad === "farenheit") {
        var resultado = temperatura * 1.8 + 32;
    }
    return (`${temperatura} grados ${unidad} son ${resultado} grados Farenheit`)
}



/*8 .-Write a JavaScript function to test if an array of integers of length 20 contains 1 or a 3.*/


function test(array) {
    flag = false;

    for (let i = 0; i < array.length; i++) {
        if ((array[i] === 1) || (array[i] === 3)) {
            flag = true;
        }
    }
    return flag
}

let arr1 = [0, 2, 2, 5, 6, 7, 7, 5, 6, 7, 7, 8, 6, 5, 7, 6, 5, 5, 6, 7, 5]
let arr2 = [1, 1, 2, 2, 3, 2, 5, 5, 6, 7, 8, 9, 8, 7, 6, 6, 8, 6, 5, 7, 9, 3]
let arr3 = [0, 2, 2, 4, 6, 7, 7, 5, 6, 7, 7, 8, 6, 5, 7, 6, 1, 5, 6, 7, 5]
let arr4 = [0, 2, 2, 4, 6, 7, 7, 5, 6, 7, 7, 8, 6, 5, 7, 6, 3, 5, 6, 7, 5]


/*9.- Write a JavaScript function to check a given person age is within 20 and 30 or 50 and 60.*/

function checkAge(age) {

    let msg = "";

    if (age < 20) {
        msg = ("Is below 20");
    }
    else if ((age >= 20) && (age < 30)) {
        msg = ("Is within 20 and 30");
    }
    else if ((age >= 30) && (age < 50)) {
        msg = ("Is within 30 and 50");

    }
    else if ((age >= 50) && (age < 60)) {
        msg = ("Is within 50 and 60");
    }
    else if (age > 60) {
        msg = ("Is over 60");

    }
    return msg
}


/*10.- Write a JavaScript function to check if a given positive number is a multiple of 3 or a multiple of 7*/


function checkNumber(number) {
    flag = false;
    if (number % 3 == 0) {
        flag = true;
    } else if (number % 7 == 0) {
        flag = true;
    } else {
        flag = false;
    }
    return flag
}

console.log(checkNumber(23))



/*11.- Write a JavaScript function to create a new string from a 
given string taking the last 3 characters and added at both 
 the front and back. The string length must be 3 or more. */


function newString(string) {
    let string2 = ""

    string2 = string[string.length - 3] + string[string.length - 2] + string[string.length - 1] + string + string[string.length - 3] + string[string.length - 2] + string[string.length - 1];
    return string2;

}
console.log(`Tu palabra nueva creada a partir de ${string1} es ${newString(string1)}`);

/*12.- Write a JavaScript function to count how many times a specified character is inside a string. 
For example:
miFuncion(“holaMundo”, “o”) debería retornar 2, puesto que hay 2 “o”s dentro del primer string.*/

let string1 = prompt("Escribe una palabra: ");
let letra = prompt("Escribe una letra que se repita dentro de dicha palabra: ")
function contadorCaracter(string, caracter) {
    let recuento = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === caracter) {
            recuento += 1;
        }
    }
    return recuento;
}
console.log(`El número de veces que se repite ${letra} en ${string1} es ${contadorCaracter(string1, letra)}`);
Contraer