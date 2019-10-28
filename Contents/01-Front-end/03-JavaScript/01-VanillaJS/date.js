
function checkFecha(fecha) {

    
    let now = new Date()
    console.log(now)
    let fechaNumber = new Date(fecha)
    console.log(fechaNumber)
    let diasTranscurridos = Math.round((now.getTime() - fechaNumber.getTime()) / (1000 * 60 * 60 * 24))

    if (fechaNumber.getTime() < now.getTime()) {
        document.write(diasTranscurridos)
    } else {
        document.write("invalid date")
    }
}

let button = document.querySelectorAll(".myButton")[0];

button.addEventListener(`click`, () => {
 let fecha = document.querySelectorAll(".dateInput")[0].value

    checkFecha(fecha)
})