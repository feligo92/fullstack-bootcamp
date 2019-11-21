const express = require('express');
const colors = require('colors');//libreria para poner color a los console.log
const bodyParser = require('body-parser');//libreria para parsear 
const cors = require('cors');//liberia cors
const fs = require('fs');//libreria file system
const jwt = require('jsonwebtoken');//libreria para crear el jwt
const jwtChecker = require('express-jwt');//libreria para comprobar el jwt
const cookieParser = require('cookie-parser');//libreria para parsear cookies
const bcrypt = require('bcrypt');//libreria para hashear
const logger = require('./logger');//importamos nuestro logger

//Importar secretos
const secretsFile = fs.readFileSync('secrets.json'); //lo hacemos síncrono porque todo el código depende de que se haya leido
const secrets = JSON.parse(secretsFile);


//Crear servidor
const server = express();
//Middleware
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser())
server.use(jwtChecker({   //como argumento le pasamos un objeto con la configuración
    secret: secrets["jwt_clave"],    //clave de la firma
    getToken: (req) => {   //funcion para obtener las cookies
        return req.cookies['jwt']; //devuelve la cookie con esa clave
    }
}).unless({ path: ['/register', '/login'] }))//objeto clave path valor array de strings con todos los paths en que no se le exige la cookie

//Endpoints

server.get('/bigBrother', (req, res) => {
    jwt.verify(req.cookies['jwt'], secrets["jwt_clave"], (error, decoded) => {
        if (error) {
            throw error
        }
        if (decoded.username === "Héctor") {
            fs.readFile('combined.log', (err, filecontent) => {
                const data = filecontent
                res.send(data)
            })
        }
    })

})

server.post('/register', (req, res) => {
    fs.readFile('user.json', (error, filecontent) => {
        const users = JSON.parse(filecontent);
        bcrypt.hash(req.body.password, 11, (err, hash) => {// bcrypt.hash(string que quieres hasehar, tiempo, callback)
            users.push({
                "username": req.body.username,
                "password": hash
            })
            fs.writeFile('user.json', JSON.stringify(users), () => {
                res.send({ 'ok': true })
                logger.log('info', `Usuario registrado. Username:${req.body.username}`)
            })
        })
    })
})

server.post('/login', (req, res) => {
    fs.readFile('user.json', (error, filecontent) => {
        const users = JSON.parse(filecontent);
        const userFound = users.filter(e => e.username === req.body.username);//e = elementos del array(argumento de la funcion flecha)
        if (userFound.length > 0) {
            bcrypt.compare(req.body.password, userFound[0]['password'], (err, same) => {//compare(pass dada,pass hasheada (error,resultado=booleano)=>)
                if (same) {
                    const token = jwt.sign({ "username": req.body.username }, secrets["jwt_clave"]);//objeto con la informacion que devolvemos , y la clave de la firma
                    res.header('Set-Cookie', `jwt=${token}; httponly; maxAge: 99999`);//respondemos con un header 'set-cookie', nombre=valor; info contextual;info contextual
                    res.send({ "logged": true });
                }
            })

        }
    })
})

server.get('/', (req, res) => {
    jwt.verify(req.cookies['jwt'], secrets["jwt_clave"], (error, decoded) => {
        if (error) {
            throw error
        }
        console.log(decoded.username)
    })
    fs.readFile('user.json', (error, filecontent) => {
        let data = JSON.parse(filecontent);
        res.send(data);
    })

})

//Listen

server.listen(3000, () => {
    console.log("Escuchando en puerto 3000")
})