let unidad = prompt("Introduzca la unidad a la que quiere convertir");//Celsius , Farenheit
let temperatura = 0;


if (unidad === "celsius") {
    temperatura = prompt("Introduzca la temperatura en grados Farenheit");
    var resultado = (temperatura - 32) / 1.8;
    document.write(`${temperatura} grados Farenheit son ${resultado} grados Celsius`);
} else if (unidad === "farenheit") {

    temperatura = prompt("Introduzca la temperatura en grados Celsius");
    var resultado = temperatura * 1.8 + 32;
    document.write(`${temperatura} grados Celsius son ${resultado} grados Farenheit`);
} else {
    document.write(`Error`);
}





