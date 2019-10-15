let anyo = prompt("¿En que año nació Perry?")
let actual = 2019;
let edad = actual - parseInt(anyo);


if (edad >= 30) {
    // codigo que se ejecuta si la condición es true
    document.write(`Perry tiene ${edad} años`);
} else {
    document.write("Perry tira pa' tu casa");
}



let palabra = prompt("escribe una palabra: ");
let word = []
let reverseWord = []
let palindromo = true;
for (let i = 0; i < palabra.length; i++) {
    word.push(palabra[i]);
    reverseWord.push(palabra[palabra.length - 1 - i]);

    if (word[i] != reverseWord[palabra.length - 1 - i]) {
        palindromo = false;

    }
}
if (palindromo) {
    document.write(`${palabra} es un palíndromo`);
} else {
    document.write(`${palabra} no es un palíndromo`);
}









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






if (palindromo) {
    document.write(`${palabra} es un palíndromo`);
} else {
    document.write(`${palabra} no es un palíndromo`);
}









let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let palabra = prompt("intodruce tu palabra: ")

let word = ""

for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] != " ") {
        for (let j = 0; j < letras.length; j++) {

            if (palabra[i] === letras[j]) {
                word += letras[(j+7) % 26];
                
            }
        }   
    } 
}document.write(word)
