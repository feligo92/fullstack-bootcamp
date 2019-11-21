export{}
//Ver si ya hay contador
let misCookies:string = document.cookie;
let victorias:string = misCookies.split('=')[3];
let derrotas:string = misCookies.split('=')[5];

if (victorias === undefined){
    document.cookie = "victorias=0";
    document.cookie = "derrotas=0"
}

//jugada random
function getRandomGame():string {
    let arrGame:string[] = ["piedra", "papel", "tijeras"];
    let rng1:number = Math.round(Math.random() * (arrGame.length - 1));

    return arrGame[rng1];
}


//juego entero
// option1 : jugada del ordenador en el formato string ("piedra", "papel", "tijeras")
// option2 : jugada del jugador en el formato string ("piedra", "papel", "tijeras")
function playGame(option1:string, option2:string):string {
    //let arr1 = ["piedra", "papel", "tijeras"];
    //let option1 = arr1[Math.round(Math.random() * (arr1.length - 1))];
    //let option2 = prompt("piedra-papel-tijeras");
    if (option1 === option2) {
        return ("Draw");
    } else if ((option1 === "piedra") && (option2 === "papel")) {
        return ("Pc wins")

    } else if ((option1 === "papel") && (option2 === "tijeras")) {
        return ("Pc wins")

    } else if ((option1 === "tijeras") && (option2 === "piedra")) {
        return ("Pc wins")

    } else if ((option2 === "piedra") && (option1 === "papel")) {
        return ("You win!")

    } else if ((option2 === "papel") && (option1 === "tijeras")) {
        return ("You win!")

    } else if ((option2 === "tijeras") && (option1 === "piedra")) {
        return ("You win!")

    } else {
        return ("aprende a jugar")
    }
}
//cambiar imagen
function getImage(jugada:string):string {
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
let miBoton0:Element = document.querySelectorAll("button")[0];
let miBoton1:Element = document.querySelectorAll("button")[1];
let miBoton2:Element = document.querySelectorAll("button")[2];
let container:Element = document.querySelectorAll(".move-container")[0];
let resultado:Element = document.querySelectorAll(".resultado-jugadas")[0];
let imagenJugador1:HTMLImageElement =<HTMLImageElement> document.querySelectorAll(".jugador1")[0];
let imagenJugadorPC:HTMLImageElement =<HTMLImageElement>document.querySelectorAll(".jugadorPc")[0];
let letsPlayContainer:Element = document.querySelectorAll(".banner-content")[0];
let resultContainer0:Element = document.querySelectorAll(".result-container")[0];
let resultContainer1:Element = document.querySelectorAll(".result-container")[1];
let resultContainer2:Element = document.querySelectorAll(".result-container")[2];
let youWin:Element = document.querySelectorAll(".youWin")[0];


miBoton0.addEventListener(`click`, ():void => {
    let pcMove:string = getRandomGame();
    let game:string = playGame("piedra", pcMove);



    imagenJugador1.src = getImage("piedra");//cambio de imagenes
    imagenJugadorPC.src = getImage(pcMove);

    if (game === "Pc wins") {
        document.cookie = "derrotas=" + derrotas+1; 
        letsPlayContainer.innerHTML = resultContainer0.innerHTML;//nuevo banner derrota
    } else if (game === "You win!") {
        letsPlayContainer.innerHTML = resultContainer1.innerHTML;//nuevo banner victoria
    } else if (game === "Draw") {
        letsPlayContainer.innerHTML = resultContainer2.innerHTML;//nuevo banner empate
    }

    container.innerHTML = resultado.innerHTML;//2 imagenes
    let returnButton:Element = document.querySelectorAll(".returnButton")[0];
    returnButton.addEventListener(`click`, ():void => { window.location.reload(true) });

});

miBoton1.addEventListener(`click`, ():void => {
    let pcMove:string = getRandomGame()
    let game:string = playGame("tijeras", pcMove)


    imagenJugador1.src = getImage("tijeras")//cambio de imagenes
    imagenJugadorPC.src = getImage(pcMove)

    

    if (game === "Pc wins") {
        letsPlayContainer.innerHTML = resultContainer0.innerHTML;//nuevo banner derrota
    } else if (game === "You win!") {
        letsPlayContainer.innerHTML = resultContainer1.innerHTML;//nuevo banner victoria
    } else if (game === "Draw") {
        letsPlayContainer.innerHTML = resultContainer2.innerHTML;//nuevo banner empate
    }

    container.innerHTML = resultado.innerHTML;
    let returnButton:Element = document.querySelectorAll(".returnButton")[0];
    returnButton.addEventListener(`click`, ():void => { window.location.reload(true) });

});

miBoton2.addEventListener(`click`, ():void => {

    let pcMove:string = getRandomGame()
    let game:string = playGame("papel", pcMove)


    imagenJugador1.src = getImage("papel")//cambio de imagenes
    imagenJugadorPC.src = getImage(pcMove)

    
    if (game === "Pc wins") {
        letsPlayContainer.innerHTML = resultContainer0.innerHTML;//nuevo banner derrota
    } else if (game === "You win!") {
        letsPlayContainer.innerHTML = resultContainer1.innerHTML;//nuevo banner victoria
    } else if (game === "Draw") {
        letsPlayContainer.innerHTML = resultContainer2.innerHTML;//nuevo banner empate
    }
    container.innerHTML = resultado.innerHTML;
    let returnButton:Element = document.querySelectorAll(".returnButton")[0];
    returnButton.addEventListener(`click`, ():void => { window.location.reload(true) });
});

