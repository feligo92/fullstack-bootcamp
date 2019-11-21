const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');//libreria para crear el jwt
const jwtChecker = require('express-jwt');//libreria para comprobar el jwt
const cookieParser = require('cookie-parser')//libreria para parsear cookies

const server = express();
//Middleware
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser())
server.use(jwtChecker({   //como argumento le pasamos un objeto con la configuración
    secret: 's3cret',    //clave de la firma
    getToken: (req)=>{   //funcion para obtener las cookies
       return req.cookies['jwt']; //devuelve la cookie con esa clave
    }
}).unless({path:['/register','/login']}))//objeto clave path valor array de strings con todos los paths en que no se le exige la cookie

//Endpoints

server.post('/register', (req, res) => {
    fs.readFile('user.json', (error, filecontent) => {
        const users = JSON.parse(filecontent);
        users.push({
            "username": req.body.username,
            "password": req.body.password
        })
        fs.writeFile('user.json', JSON.stringify(users), () => {
            res.send({ 'ok': true })
        })
    })
})

server.post('/login', (req, res) => {
    fs.readFile('user.json', (error, filecontent) => {
        const users = JSON.parse(filecontent);
        const userFound = users.filter(e => e.username === req.body.username);
        if (userFound.length > 0) {
            if (userFound[0]['password'] === req.body.password) {
                const token = jwt.sign({ "username": req.body.username }, 's3cret');//objeto con la informacion que devolvemos , y la clave de la firma
                res.header('Set-Cookie', `jwt=${token}; httponly; maxAge: 99999`);//respondemos con un header 'set-cookie', nombre=valor; info contextual;info contextual
                res.send({ "logged": true });
            }
        }
    })
})

server.get('/', (req, res) => {
    fs.readFile('user.json', (error, filecontent) => {
        let data = JSON.parse(filecontent);
        res.send(data);
    })

})

//Listen

server.listen(3000, () => {
    console.log("Escuchando en puerto 3000")
})