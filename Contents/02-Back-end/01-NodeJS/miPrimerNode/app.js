
const colors = require('colors');
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    console.log('He recibido una petición'.green)


    //Acceder al endpoint
    if (request.url === "/hola") {
        response.write('Aloha');
        response.end();
    }else if (request.url === "/adios"){
        response.write('Con Dios!');
        response.end();
    }else{
        response.write('Not found');
        response.end();
        console.log(request.url)
    }
}).listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080!'.rainbow);
})

