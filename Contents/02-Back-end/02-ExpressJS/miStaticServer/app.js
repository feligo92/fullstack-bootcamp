const express = require ('express');
const process = require ('process');
const helmet = require('helmet');

//Declaramos una variable para el puerto y la definimos como el 3r argumento que recibirá
const port = process.argv[2]

const server = express();

//Middleware
server.use(helmet());
server.use(helmet.hidePoweredBy())
server.use(express.static('docs'));



//Escuchando en port
server.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})