let palabra = prompt("Diga una palabra");
resultado = " "
for (let i = palabra.length-1; i >= 0; i--) {
    resultado += palabra[i]   
}
console.log(resultado)

let palabra = prompt("Diga una palabra");
resultado = " "
for (let i = 0; i <= palabra.length; i++) {
    resultado = palabra[i] + restultado ;  
}
console.log(resultado)


let palabra = prompt("Diga una palabra");
resultado = " ";

for (let letra of palabra){
    resultado  = letra + resultado;
}
