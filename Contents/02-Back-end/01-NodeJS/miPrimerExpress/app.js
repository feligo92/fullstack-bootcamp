
const colors = require('colors');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser')

//Crear servidor
const server = express();

//Cofiguramos el middleware
server.use(cors());
server.use(bodyParser.json());


//Configuramos los endpoints

server.get("/:endpointObjetivo", (req, res) => {
    const urlObjetivo = decodeURI(req.params.endpointObjetivo);
    https.get(urlObjetivo, (APIresponse) => {
        let buffer = "";
        APIresponse.on('data', (chunk) => {
            buffer += chunk;
        })

        APIresponse.on('end', () => {
            res.send(buffer);
        })
    })

})


//Endpoint Put
server.put('/user', (req,res)=>{
    const body = req.body;
    fs.writeFile('user.json', JSON.stringify(body), ()=>{
        res.send('Usuario guardado con éxito');
    })
})


server.listen(3000, () => {
    console.log('Escuchando en el puerto 3000'.rainbow)
})