

let button = document.querySelectorAll(".myButton")[0];

function getRandomNumber(maxLifeTime, actualLifeTime) {
    let random = Math.floor(Math.random() * maxLifeTime) + actualLifeTime
    return random
}

function getDead(birth) {
    let now = new Date();
    let birthDate = new Date(birth);
    let tiempoVivido = Math.round(now.getTime() - birthDate.getTime()) 
    let tiempoMaximo = Math.round(birthDate.getTime() + 80 * 365 * 24 * 60 * 60 * 1000)
    let random = getRandomNumber(tiempoMaximo, tiempoVivido)
    return random
}

button.addEventListener(`click`, () => {

    let birth = document.querySelectorAll(".dateInput")[0].value
    let random = getDead(birth)
    let death = new Date(random)
    document.write(`Morirás el ${death}, trata de disfrutar hasta entonces.`)
})