/* TYPESCRIPT
Es un lenguaje de programación con tipado orientado a proyectos de tamaño considerable.

Los navegadores no pueden entender TypeScript así que debemos transpilar el código a JS*/


//Tipos en TypeScript
export { }
/*
-number
-string
-boolean
-array
-tupla  (arrays mixtos)
-interface (objects)
-enum (lista con posibles valores)
-any (comodín)
-void (para funciones sin return)
*/
let anyo: number = 1

let a: string = "hola"

let b: boolean = true

let listaAlumnos: string[] = ["Hector", "Noel"]

let mixArray: [string, number, boolean] = ["hector", 2, true]//tupla: array con elementos mixtos de tamaño fijo


interface tipoMesa {
    "patas": number,
    "material": string,
    "vendida": boolean
}

let mesa: tipoMesa = {
    "patas": 4,
    "material": "madera",
    "vendida": false
}

enum Meses {
    Enero,
    Febrero,
    Marzo,
    Abril,
    Mayo,
    Junio,
    Julio,
    Agosto,
    Septiembre
    , Octubre
    , Noviembre
    , Diciembre
}


let mes: Meses = Meses.Octubre

let c: any = "hola";//tipo comodín

/* COSAS QUE SIEMPRE DEBO TIPAR
- Variables
- Argumentos de todas las funciones
- Funciones
*/
function suma(a: number, b: number): number {
    return a + b
}