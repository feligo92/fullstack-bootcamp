/*TODO location.reload()*/



/*Escribe una función que acepte un número como argumento. La función retornará el número opuesto. 
Ejemplo:
miFuncion(40) → -40
miFuncion(-70) → 70*/


let miBoton0 = document.querySelectorAll("body > button")[0]

miBoton0.addEventListener(`click`, () => { getNumber(event) });

function getNumber(event) {
    let number = prompt("Tell me a number");
    document.write(number * -1);
    return true
}



/*Escribe una función que acepte dos números como argumentos. La función nos devolverá true si el primer número es divisible por el segundo.
Ejemplo:
miFuncion(20, 2) → true, puesto que 20 es divisible entre 2
miFuncion(15, 4) → false, puesto que 15 no es divisible entre 4 */


let miBoton1 = document.querySelectorAll("body > button")[1]

miBoton1.addEventListener(`click`, () => { checkDivisible(event) })


function checkDivisible(event) {
    flag = false;
    let number = prompt("Tell me a number");
    let number2 = prompt("Tell me another one");
    if (number % number2 === 0) {
        flag = true;
    }
    document.write(flag);
    return true
}


/*Escribe una función que reciba un número y devuelva el día de la semana asociado.
 
Ejemplo:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7" */

let miBoton2 = document.querySelectorAll("body > button")[2]

miBoton2.addEventListener(`click`, () => { getDay(event) });

function getDay() {
    let number = prompt("please enter a number between 1 and 7");
    switch (number) {
        case '1':
            document.write("Sunday");
            break;

        case '2':
            document.write("Monday");
            break;

        case '3':
            document.write("Tuesday");
            break;
        case '4':
            document.write("Wednesday");
            break;
        case '5':
            document.write("Thursday");
            break;
        case '6':
            document.write("Friday");
            break;
        case '7':
            document.write("Saturday");
            break;
        default:
            document.write("Wrong, please enter a number between 1 and 7");
            break;
    }
    return true
}




/*Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
Write a function that accepts the time in hours as input and returns the number of litres Nathan will drink.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5 */



let miBoton3 = document.querySelectorAll("body > button")[3]

miBoton3.addEventListener(`click`, () => { checkWater(event) });


function checkWater() {
    let hours = prompt("How many time (hours)?")
    document.write(`litres = ${hours * 0.5}`)
    return true
}



/*¿Recuerdas cuando arrancábamos las hojas de las margaritas diciendo "me quiere", 
"no me quiere", "me quiere"...? Vamos a programar una margarita. 
Tu función recibirá un número como input. Si dicho número es par, devolverá el string "me quiere". 
Si el número es impar, devolverá el string "no me quiere". */


let miBoton4 = document.querySelectorAll("body > button")[4]

miBoton4.addEventListener(`click`, () => { sheLovesYouYeahYeahYeah(event) });


function sheLovesYouYeahYeahYeah() {
    let numb = prompt("Tell me a number baby")
    if (numb % 2 === 0) {
        document.write(`She Loves You Yeah Yeah Yeah
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nGbWU8S3vzs" frameborder="0" allow="
        accelerometer; autoplay=true; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `)
    } else {
        document.write("morirás solo como Agnès")
    }
    return true
}




/*Vamos a programar un árbitro para jugar a piedra-papel-tijeras.
 Escribe una función que acepte dos strings como argumentos. Cada uno de esos strings puede ser "piedra", 
 "papel" o "tijera". El primero de los strings es la elección del jugador 1,
  y el segundo string es la elección del jugador 2. La función retornará un string diciendo qué jugador ha ganado. */


let miBoton5 = document.querySelectorAll("body > button")[5]

miBoton5.addEventListener(`click`, () => { checkWinner(event) });


function checkWinner() {
    let option1 = prompt("piedra-papel-tijeras");
    let option2 = prompt("piedra-papel-tijeras");
    if (option1 === option2) {
        document.write("Draw");
    } else if ((option1 === "piedra") && (option2 === "papel")) {
        document.write("Player2 wins")

    } else if ((option1 === "papel") && (option2 === "tijeras")) {
        document.write("Player2 wins")

    } else if ((option1 === "tijeras") && (option2 === "piedra")) {
        document.write("Player2 wins")

    } else if ((option2 === "piedra") && (option1 === "papel")) {
        document.write("Player1 wins")

    } else if ((option2 === "papel") && (option1 === "tijeras")) {
        document.write("Player1 wins")

    } else if ((option2 === "tijeras") && (option1 === "piedra")) {
        document.write("Player1 wins")

    } else {
        document.write("aprende a jugar")
    }
    return true
}



/*Haz una función que acepte dos arrays como inputs. La función devolverá un array con todos los datos de los otros 2 arrays.
Ejemplo:
miFuncion([1,2,3], [4,5,6]) → devolverá [1,2,3,4,5,6]
miFuncion(["hola", "mundo"], [4,5,6]) → devolverá ["hola", "mundo",4,5,6] */


let miBoton6 = document.querySelectorAll("body > button")[6]

miBoton6.addEventListener(`click`, () => { joinArray(event) });

function joinArray() {
    let arr1 = ["hola", "mundo"];
    let arr2 = [4, 5, 6];
}













/*El objeto window (el contexto global de los navegadores) nos ofrece un maravilloso 
objeto llamado "Math" que nos presenta funciones muy útiles para los programadores. 
Para llamarlo basta con escribir "Math". Algunas de las funciones más útiles de Math son:
Math.round() para redondear números
Math.random() para generar números aleatorios
Math.min() para encontrar el mínimo de una lista de números
Math.max() para encontrar el máximo de una lista de números
Tu tarea va a consistir en crear una función que genere números al azar entre 1 y 10. */


function getRandomNumber() {
    document.write(Math.floor(Math.random() * 10) + 1)
    return true
}


/*Ahora que has aprendido a crear números random entre 1 y 10 usando el Math.random(),
 vas a hacer una función que genere números random entre 1 y X, donde X será un argumento de tu función. */

function getRandomX() {
    let numberX = prompt("introduce un numero");

    document.write(Math.floor(Math.random() * numberX) + 1)
    return true
}


/*¡Buen trabajo! Ahora sabes generar números random entre 1 y X. Utilizando lo que acabas de aprender, 
podrías aplicarlo a un array para obtener un elemento al azar de dicho array.
Ejemplo:
miFuncion(["hola", "mundo", "lo estoy", "petando"])
Debería retornar una de esas strings al azar. */

function getRandomArr() {
    let arr1 = ["hola", "mundo", "lo estoy", "petando"];
    let rng = Math.round(Math.random() * (arr1.length - 1));
    document.write(`${arr1[rng]}<br>`);
    return true
}


/*¡Aw yeah! Ya viene la parte práctica: aplicando todos los conocimientos que has adquirido 
sobre sacar elementos random de un array, haz una función que elija “piedra", “papel" o “tijeras" al azar. */


function getRandomGame() {
    let arrGame = ["piedra", "papel", "tijeras"];
    let rng1 = Math.round(Math.random() * (arrGame.length - 1));

    return arrGame[rng1];
}

document.write(`${getRandomGame()}<br>`)


/*Ayer hiciste una función a la cual le pasábamos como argumentos las “jugadas" de dos jugadores en piedra,papel o tijera, ¿recuerdas?
Tu función hacía algo como ésto...
miFuncion(“piedra", “tijeras") → “El jugador 1 gana"
Bien, te toca volver a usar esa función. Cópiala y pégala, porque vas a necesitarla de nuevo. Te espero… ¿ya la tienes?
Vas a invocar a esta función, pero el primer argumento va a ser un string al azar generado 
con la función que hiciste en el ejercicio anterior. El segundo argumento va a ser TU jugada. ¿ganarás al ordenador, o perderás?*/

let miBoton7 = document.querySelectorAll("body > button")[7]

miBoton7.addEventListener(`click`, () => { playGam(event) });

function playGame() {
    let arr1 = ["piedra", "papel", "tijeras"];
    let option1 = arr1[Math.round(Math.random() * (arr1.length - 1))];
    let option2 = prompt("piedra-papel-tijeras");
    if (option1 === option2) {
        document.write("Draw");
    } else if ((option1 === "piedra") && (option2 === "papel")) {
        document.write("Player2 wins")

    } else if ((option1 === "papel") && (option2 === "tijeras")) {
        document.write("Player2 wins")

    } else if ((option1 === "tijeras") && (option2 === "piedra")) {
        document.write("Player2 wins")

    } else if ((option2 === "piedra") && (option1 === "papel")) {
        document.write("Player1 wins")

    } else if ((option2 === "papel") && (option1 === "tijeras")) {
        document.write("Player1 wins")

    } else if ((option2 === "tijeras") && (option1 === "piedra")) {
        document.write("Player1 wins")

    } else {
        document.write("aprende a jugar")
    }
    return true
}




/*¿Alguna vez te has preguntado cómo sería tu nombre de superhéroe? ¡Descubrámoslo!
Te voy a dar un array con títulos de héroe masculino:
const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"]
También te voy a dar un array con títulos de héroes femeninas:
const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"]
También te voy a dar un array con adjetivos molones:
const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]
Y finalmente un array con sustantivos:
const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]
Tu misión va a ser crear una función que elija al azar:
Un título
Un sustantivo
Un adjetivo
Y que retorne un string concatenándolos todos. Por ejemplo: “GENERAL GIANT MOLE"*/


function getRng(numMax) {


    return Math.round(Math.random() * (numMax - 1))
}

function randomSuperName() {

    let gender = prompt("Are you m or f");
    let arrMale = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor", "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"];
    let arrFemale = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
    let arrAdj = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
    let arrNames = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
    let resultado = "se cisheteronormativo plis que estamos empezando"
    if (gender === "m") {
        resultado = `${arrMale[getRng(arrMale.length)]} ${arrAdj[getRng(arrAdj.length)]} ${arrNames[getRng(arrNames.length)]}`
    } else if (gender === "f")
        resultado = `${arrFemale[getRng(arrFemale.length)]} ${arrAdj[getRng(arrAdj.length)]} ${arrNames[getRng(arrNames.length)]}`
    return resultado
}

document.write(`${randomSuperName()}<br>`)


/*EXTRA: Cread un programa que lista un array de objetos de clientes, construido con las siguientes funciones:
   function listaClientes (función principal del programa que llama a las otras)
   function getClientes
           devuelve un array de objetos de clientes :
[   {name:"Edward Norton",amountPurchased: 28.14, age: 65, city:"Barcelona"},
{name:"Charles Darwin",amountPurchased: 324.34, age: 42, city:"Madrid"},
{name:"Steven Tyler",amountPurchased: 124.94, age: 77, city:"Barcelona"},
{name:"Michael J",amountPurchased: 624.74, age: 59, city:"Madrid"},
{name:"Satoshi",amountPurchased: 734.14, age: 33, city:"Barcelona"},
{name:"Bruce Dickinson",amountPurchased: 424.24, age: 66, city:"Valencia"}
]
       function getInfoCliente
           recibe un objeto de cliente y devuelve una string formateada con los datos del cliente que quieres enseñar del cliente.
           Si el amountPurchased de cada cliente es menor que 200, no se debe incluir en el resultado
       function imprimeCliente
           recibe una string formateada y escribe en la pantalla, si el cliente tiene más de 35 años, debe aparecer en azul, sino, en rojo.
           Si el cliente es de Barcelona, siempre tiene que aparecer en verde.*/


function listaClientes() {
    const clientes = getClientes();
    console.log(clientes);
    const miString = getInfoClient(clientes[0]);
    console.log(miString);
    imprimeCliente(miString);
    return true;
}

function getClientes() {
    const results = [{ name: "Edward Norton", amountPurchased: 28.14, age: 65, city: "Barcelona" },
    { name: "Charles Darwin", amountPurchased: 324.34, age: 42, city: "Madrid" },
    { name: "Steven Tyler", amountPurchased: 124.94, age: 77, city: "Barcelona" },
    { name: "Michael J", amountPurchased: 624.74, age: 59, city: "Madrid" },
    { name: "Satoshi", amountPurchased: 734.14, age: 33, city: "Barcelona" },
    { name: "Bruce Dickinson", amountPurchased: 424.24, age: 66, city: "Valencia" }
    ];
    return results
}

function getInfoClient(client) {
    let formateada = `Su nombre es ${client['name']}. Tiene ${client['age']} años. Vive en ${client['city']}. `;
    if (client['amountPurchased'] > 200) {
        formateada += `Y gana ${client['amountPurchased']} dineros.`
    }
    return formateada;
}

function imprimeCliente(stringFormateado) {

    //Para obtener la edad
    let startAge = stringFormateado.indexOf("años") - 3;
    let endAge = stringFormateado.indexOf("años") - 2;
    let ageString = stringFormateado[startAge] + stringFormateado[endAge];

    //Para obtener la ciudad
    let startCity = stringFormateado.indexOf("en ") + 3;
    let endCity = stringFormateado.indexOf(". Y") - 1;
    let city = "";
    for (let i = startCity; i < endCity; i++) {
        city += stringFormateado[i];
    }

    if (city === "Barcelona") {
        document.write(`<p style='color:green'>${stringFormateado}</p>`)
    } else {
        if (parseInt(ageString) > 35) {
            document.write(`<p style='color:blue'>${stringFormateado}</p>`)
        }
        else {
            document.write(`<p style='color:red'>${stringFormateado}</p>`)
        }
    }

    return true;
}



