
//PETICION GET 


let request = new XMLHttpRequest()//esta funcion devuelve un objeto que permite hacer peticiones HTTP
request.onreadystatechange = function () {//indicamos el estado
    if (request.readyState == 4 && request.status == 200) {
        console.log(request.responseText)
    }
}
request.open('GET', 'https://api.chucknorris.io/jokes/random')
request.send()


//MODELO PETICION GET CON CALLBACK
function httpGet(theUrl, callback) {

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl);

    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")
    
    xmlHttp.send();
}

function imprimeCliente(objCliente){
   document.write(objCliente.name)
} 

function listaClientes(objClientes){
    for(let i = 0; i < objClientes.firstClients.length; i++){
        imprimeCliente(objClientes.firstClients[i])
    }
} 
function imprime(texto){ //callback
    let objClientes = JSON.parse(texto);

    listaClientes(objClientes)
    
}

function imprime(texto){ //callback
    console.log(texto)
}

// AJAX
httpGet("https://api.chucknorris.io/jokes/random",imprime)

//SOLUCIONES PARA LA ASINCRONIA

//Call back: nombre que se le da a una funcion que se ejecuta despues de un proceso asincrono



/*Partes de una peticion-respuesta (NETWORK)

Headers: tienen informacion contextual (clave:valor)
Body: tienen la informacion del mensaje(JSON)



Para acceder a una API que te impide hacer peticiones por CORS usaremos un servidor proxy.

El servidor proxy hara la peticion por nosotros y nos devolvera la respuesta .