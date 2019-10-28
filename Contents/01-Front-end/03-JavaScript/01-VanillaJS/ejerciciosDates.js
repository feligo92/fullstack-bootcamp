//1.En una consola, imprime la fecha actual en el formato DD-MM-YYYY

function imprimirHoy() {
    let now = new Date();
    console.log(now);
}
imprimirHoy();

//2.Haz una función que acepte como argumentos un año y un mes,
// y te diga cuántos días tiene dicho mes. Ejemplo:getDaysInMonth(1, 2012) → debería retornar 31


function getDaysInMonth(year, month) {

    let firstDate = new Date(year, month)
    let nextMonth = parseInt(month) + 1;
    let secondDate = new Date( year, nextMonth);
  
    
    let comparision = secondDate.getTime() - firstDate.getTime()
    console.log(Math.round(comparision/(1000*60*60*24)))
}

if (month == 12) {
    secondDate = new Date( year, "01")
} else {
    secondDate = new Date(year, (nextMonth < 10 ? "0" + nextMonth : nextMonth))
}


//3.funcion con argumento variable data
//y que reforme el nombre completo del mes de dicha fecha.
function nombreMes(date) {
    let userData = document.querySelector(".userInput");
    date = userData.value;
    let fecha = new Date(date);
    let mes = fecha.getMonth();
    switch (mes) {
        case 0:
            if (mes == 0) {
                return "Enero";
            }
        case 1:
            if (mes == 1) {
                return "Febrer";
            }
        case 2:
            if (mes == 2) {
                return "Marzo";
            }
        case 3:
            if (mes == 3) {
                return "Abril";
            }
        case 4:
            if (mes == 04) {
                return "Mayo";
            }
        case 5:
            if (mes == 5) {
                return "Junio";
            }
        case 6:
            if (mes == 6) {
                return "Julio";
            }
        case 7:
            if (mes == 7) {
                return "Agosto";
            }
        case 8:
            if (mes == 8) {
                return "Septiembre";
            }
        case 9:
            if (mes == 9) {
                return "Octubre";
            }
        case 10:
            if (mes == 10) {
                return "Noviembre";
            }
        case 11:
            if (mes == 11) {
                return "Diciembre"
            }
        default:
            return "Data no válida"
    }
};
// let boton = document.querySelector(".dateButton");
// boton.addEventListener("click",()=>{
//     let mes= nombreMes()
//     let input = document.querySelector(".resultInput");
//     input.innerHTML = `El mes de la fecha que has escrito es ${mes}`;
// });
function findeOrWhat(date) {
    let userData = document.querySelector(".userInput");
    date = userData.value;
    let fecha = new Date(date);
    let dia = fecha.getDay();
    switch (dia) {
        case 0:
            if (dia == 0) {
                return "Weekend!";
            }
        case 1:
            if (dia == 1) {
                return "F*cking Monday";
            }
        case 2:
            if (dia == 2) {
                return "Not weekend";
            }
        case 3:
            if (dia == 3) {
                return "Not weekend";
            }
        case 4:
            if (dia == 04) {
                return "Not weekend";
            }
        case 5:
            if (dia == 5) {
                return "Not weekend";
            }
        case 6:
            if (dia == 6) {
                return "Weekend!";
            }
        default:
            return "Data no válida"
    }
};
// let boton = document.querySelector(".dateButton");
// boton.addEventListener("click", () => {
//     let dia = findeOrWhat();
//     let input = document.querySelector(".resultInput");
//     input.innerHTML = `${dia}`;
// });
// 5.Escribe una función que te diga qué día de la semana 
// fue el día en quenaciste. Ejemplo:weekdayBorn(new Date(‘16/07/1994’)) 
// → debería devolver “martes”
function birthDayDay(date) {
    let userData = document.querySelector(".userInput");
    date = userData.value;
    let fecha = new Date(date);
    let dia = fecha.getDay();
    switch (dia) {
        case 0:
            if (dia == 0) {
                return "Domingo";
            }
        case 1:
            if (dia == 1) {
                return "F*cking Monday";
            }
        case 2:
            if (dia == 2) {
                return "Martes";
            }
        case 3:
            if (dia == 3) {
                return "Miércoles";
            }
        case 4:
            if (dia == 04) {
                return "Jueves";
            }
        case 5:
            if (dia == 5) {
                return "Viernes";
            }
        case 6:
            if (dia == 6) {
                return "Sábado";
            }
        default:
            return "Data no válida"
    }
};
let boton = document.querySelector(".dateButton");
boton.addEventListener("click", () => {
    let dia = birthDayDay();
    let weekend = findeOrWhat();
    let mes = nombreMes();
    let input = document.querySelector(".resultInput");
    input.innerHTML = `<p>${mes}</p><p>${weekend}</p><p>${dia}</p>`;
});
Contraer



