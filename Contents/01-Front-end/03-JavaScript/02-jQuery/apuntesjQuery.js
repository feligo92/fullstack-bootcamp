

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

    .css()      $("body>button").css({ "color": "red" }) // cambiamos el css del elemento pasandole un objeto como argumento

        .removeClass()//como argumento le pasamos la clase que queremos eliminar
        .addClass()// como argumento le pasamos la clase que queremos añadir


//EVENTOS

$("body>button").click(() => { alert("has clickado") })







//LLAMADAS HTTP https://api.jquery.com/jQuery.ajax/#jQuery-ajax-url-settings

//GET

$.ajax({
    "type": "GET",
    "url": "https://reqres.in/api/users?page=2",
    "dataType": "json",
    "headers": { "Content-Type": "application/json" },
    "success": (data) => { console.log(data) },
    "error": (error) => { console.log(error) }
})


$.get({
    "url": "https://reqres.in/api/users?page=2",
    "success": (data) => { console.log(data) },
    "dataType": "json"
})






//POST

$.ajax({
    "type": "POST",
    "url": "https://cors-anywhere.herokuapp.com/https://reqres.in/api/users",
    "dataType": "json",
    "data": JSON.stringify({ "name": "morpheus", "job": "leader" }),
    "headers": {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    "success": (data) => { console.log(data) },
    "error": (error) => { console.log(error) }
})




$.post({
    "url": "https://cors-anywhere.herokuapp.com/https://reqres.in/api/users",
    "data": JSON.stringify({ "name": "morpheus", "job": "leader" }),
    "dataType": "json",
    "success": (data) => { console.log(data) }
})




$.ajax({
    "type": "PUT",
    "url": "https://cors-anywhere.herokuapp.com/https://reqres.in/api/users/2",
    "dataType": "json",
    "data": JSON.stringify({
        "name": "morpheus",
        "job": "zion resident"
    }),
    "headers": {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    "success": (data) => { console.log(data) },
    "error": (error) => { console.log(error) }
})