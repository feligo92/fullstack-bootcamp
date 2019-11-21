"use strict";
exports.__esModule = true;
//Ver si ya hay contador
var misCookies = document.cookie;
var victorias = misCookies.split('=')[3];
var derrotas = misCookies.split('=')[5];
if (victorias === undefined) {
    document.cookie = "victorias=0";
    document.cookie = "derrotas=0";
}
//jugada random
function getRandomGame() {
    var arrGame = ["piedra", "papel", "tijeras"];
    var rng1 = Math.round(Math.random() * (arrGame.length - 1));
    return arrGame[rng1];
}
//juego entero
// option1 : jugada del ordenador en el formato string ("piedra", "papel", "tijeras")
// option2 : jugada del jugador en el formato string ("piedra", "papel", "tijeras")
function playGame(option1, option2) {
    //let arr1 = ["piedra", "papel", "tijeras"];
    //let option1 = arr1[Math.round(Math.random() * (arr1.length - 1))];
    //let option2 = prompt("piedra-papel-tijeras");
    if (option1 === option2) {
        return ("Draw");
    }
    else if ((option1 === "piedra") && (option2 === "papel")) {
        return ("Pc wins");
    }
    else if ((option1 === "papel") && (option2 === "tijeras")) {
        return ("Pc wins");
    }
    else if ((option1 === "tijeras") && (option2 === "piedra")) {
        return ("Pc wins");
    }
    else if ((option2 === "piedra") && (option1 === "papel")) {
        return ("You win!");
    }
    else if ((option2 === "papel") && (option1 === "tijeras")) {
        return ("You win!");
    }
    else if ((option2 === "tijeras") && (option1 === "piedra")) {
        return ("You win!");
    }
    else {
        return ("aprende a jugar");
    }
}
//cambiar imagen
function getImage(jugada) {
    switch (jugada) {
        case "piedra":
            return "https://image.flaticon.com/icons/svg/2206/2206692.svg";
            break;
        case "tijeras":
            return "https://image.flaticon.com/icons/svg/129/129494.svg";
            break;
        case "papel":
            return "https://image.flaticon.com/icons/svg/1691/1691519.svg";
            break;
    }
}
//selectores
var miBoton0 = document.querySelectorAll("button")[0];
var miBoton1 = document.querySelectorAll("button")[1];
var miBoton2 = document.querySelectorAll("button")[2];
var container = document.querySelectorAll(".move-container")[0];
var resultado = document.querySelectorAll(".resultado-jugadas")[0];
var imagenJugador1 = document.querySelectorAll(".jugador1")[0];
var imagenJugadorPC = document.querySelectorAll(".jugadorPc")[0];
var letsPlayContainer = document.querySelectorAll(".banner-content")[0];
var resultContainer0 = document.querySelectorAll(".result-container")[0];
var resultContainer1 = document.querySelectorAll(".result-container")[1];
var resultContainer2 = document.querySelectorAll(".result-container")[2];
var youWin = document.querySelectorAll(".youWin")[0];
miBoton0.addEventListener("click", function () {
    var pcMove = getRandomGame();
    var game = playGame("piedra", pcMove);
    imagenJugador1.src = getImage("piedra"); //cambio de imagenes
    imagenJugadorPC.src = getImage(pcMove);
    if (game === "Pc wins") {
        document.cookie = "derrotas=" + derrotas + 1;
        letsPlayContainer.innerHTML = resultContainer0.innerHTML; //nuevo banner derrota
    }
    else if (game === "You win!") {
        letsPlayContainer.innerHTML = resultContainer1.innerHTML; //nuevo banner victoria
    }
    else if (game === "Draw") {
        letsPlayContainer.innerHTML = resultContainer2.innerHTML; //nuevo banner empate
    }
    container.innerHTML = resultado.innerHTML; //2 imagenes
    var returnButton = document.querySelectorAll(".returnButton")[0];
    returnButton.addEventListener("click", function () { window.location.reload(true); });
});
miBoton1.addEventListener("click", function () {
    var pcMove = getRandomGame();
    var game = playGame("tijeras", pcMove);
    imagenJugador1.src = getImage("tijeras"); //cambio de imagenes
    imagenJugadorPC.src = getImage(pcMove);
    if (game === "Pc wins") {
        letsPlayContainer.innerHTML = resultContainer0.innerHTML; //nuevo banner derrota
    }
    else if (game === "You win!") {
        letsPlayContainer.innerHTML = resultContainer1.innerHTML; //nuevo banner victoria
    }
    else if (game === "Draw") {
        letsPlayContainer.innerHTML = resultContainer2.innerHTML; //nuevo banner empate
    }
    container.innerHTML = resultado.innerHTML;
    var returnButton = document.querySelectorAll(".returnButton")[0];
    returnButton.addEventListener("click", function () { window.location.reload(true); });
});
miBoton2.addEventListener("click", function () {
    var pcMove = getRandomGame();
    var game = playGame("papel", pcMove);
    imagenJugador1.src = getImage("papel"); //cambio de imagenes
    imagenJugadorPC.src = getImage(pcMove);
    if (game === "Pc wins") {
        letsPlayContainer.innerHTML = resultContainer0.innerHTML; //nuevo banner derrota
    }
    else if (game === "You win!") {
        letsPlayContainer.innerHTML = resultContainer1.innerHTML; //nuevo banner victoria
    }
    else if (game === "Draw") {
        letsPlayContainer.innerHTML = resultContainer2.innerHTML; //nuevo banner empate
    }
    container.innerHTML = resultado.innerHTML;
    var returnButton = document.querySelectorAll(".returnButton")[0];
    returnButton.addEventListener("click", function () { window.location.reload(true); });
});
