
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
new Date("2019", "10", "08", "10", "15", "33", "340")

new Date("2018-10-09 12:00:12:239")

let now = new Date()


now.getFullYear()//función para obtener el año
now.getMonth()//obtenere el mes
now.getDate()//obtener el numero del dia
now.getDay()// obtener el dia de la semana
now.getHours()//horas
now.getMinutes()//minutos
now.getSeconds()//segundos
now.getMilliseconds()//milisegundos
now.getTime()//obtenemos los milisegundos transcrurridos desde 
//el 01-01-1970 00:00:00

now.setFullYear()//cambiar año pasando el nuevo como argumento
now.setMonth()//cambiar el mes
now.setDate()//cambiar el numero del dia
now.setDay()//cambiar el dia de la semana
now.setHours()//horas
now.setMinutes()//minutos
now.setSeconds()//segundos
now.setMilliseconds()//milisegundos



let now = new Date()

let random = new Date("08-10-1986")

now.getTime() > random.getTime()     //comparamos 2 fechas a partir de los milisegundos transcurridos desde 1970


let hector = new Date("1992", "08", "21")
let now = new Date()

let diasHector = Math.round((now.getTime() - hector.getTime()) / (1000 * 60 * 60 * 24))




function checkFecha(fecha) {

    
    let now = new Date()

    fechaNumber = new Date(fecha)
    let diasTranscurridos = Math.round((now.getTime() - fechaNumber.getTime()) / (1000 * 60 * 60 * 24))

    if (fechaNumber.getTime() < now.getTime()) {
        console.log(diasTranscurridos)
    } else {
        console.log("invalid date")
    }
}


