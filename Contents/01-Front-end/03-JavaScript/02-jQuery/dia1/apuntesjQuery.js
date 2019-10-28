

//MANIPULACIÓN DEL DOM

//En vanilla

document.querySelectorAll("body>button")[0];


//En jQuery $ equivale a querySelectorAll

$("body>button");


innerText =.text 
innerHTLM = .html 
innerValue = .val

.remove() //sirve para eliminar un elemento del DOM
.empty() // sirve para vaciar un elemento del DOM
.append() // añade al final del elemento seleccionado lo que le pases como argumento
.prepend() // añade al principio del elemento seleccionado lo que le pases como argumento
.before() // añade lo que le pases como argumento antes del elemento seleccionado
.after() //  añade lo que le pases como argumento después del elemento seleccionado

.css()      $("body>button").css({"color":"red"}) // cambiamos el css del elemento pasandole un objeto como argumento

.removeClass()//como argumento le pasamos la clase que queremos eliminar
.addClass()// como argumento le pasamos la clase que queremos añadir


    //EVENTOS

    $("body>button").click(()=>{alert("has clickado")})