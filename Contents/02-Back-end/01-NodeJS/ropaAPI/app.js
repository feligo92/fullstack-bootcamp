const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');//libreria para crear el jwt
const jwtChecker = require('express-jwt');//libreria para comprobar el jwt
const cookieParser = require('cookie-parser')//libreria para parsear cookies
const helmet = require('helmet');
const { check, validationResult } = require('express-validator');
const validator = require('validator');

//Crear servidor
const server = express();

//MiddleWare
server.use(helmet());
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser())
server.use(jwtChecker({   //como argumento le pasamos un objeto con la configuración
    secret: 's3cret',    //clave de la firma
    getToken: (req) => {   //funcion para obtener las cookies
        return req.cookies['jwt']; //devuelve la cookie con esa clave
    }
}).unless({ path: ['/register', '/login'] }))//objeto clave path valor array de strings con todos los paths en que no se le exige la cookie




//Endpoints


server.post('/register', [
    check('email').trim().escape(),
    check('password').trim().escape()
], (req, res) => {
    fs.readFile('users.json', (error, filecontent) => {
        const users = JSON.parse(filecontent);
        const userFound = users.filter(e => e.email === req.body.email);
        if (userFound.length > 0) {
            res.send({ 'error': 'El usuario ya existe' })
        } else if (validator.isEmail(req.body.email)) {
            users.push({
                "email": req.body.email,
                "password": req.body.password
            })
            fs.writeFile('users.json', JSON.stringify(users), () => {
                res.send({ 'ok': true })
            })
        } else {
            res.send({ 'error': 'Introduce un email válido' })
        }

    })
})


server.post('/login', [
    check('email').trim().escape(),
    check('password').trim().escape()
], (req, res) => {
    fs.readFile('users.json', (error, filecontent) => {
        const users = JSON.parse(filecontent);
        const userFound = users.filter(e => e.email === req.body.email);
        if (userFound.length > 0) {
            if (userFound[0]['password'] === req.body.password) {
                const token = jwt.sign({ "email": req.body.email }, 's3cret');//objeto con la informacion que devolvemos , y la clave de la firma
                res.header('Set-Cookie', `jwt=${token}; httponly; maxAge: 99999`);//respondemos con un header 'set-cookie', nombre=valor; info contextual;info contextual
                userFound[0]['token'] = token
                fs.writeFile('users.json', JSON.stringify(users), () => {
                    res.send({ "logged": true })
                })
            }
        }
    })
})

//====Middleware======
server.use((req, res, next) => {
    fs.readFile('users.json', (error, fileContent) => {
        const userFound = JSON.parse(fileContent).filter(e => e.token === req.cookies['jwt']);
        console.log(req.cookies, userFound)
        if (userFound.length === 0) {
            res.send({"error":"Los tokens no coinciden"});
        }
       next()
    })

})
//===============

server.get("/products", (req, res) => {
    console.log("He recibido una peticion Get al endpoint '/products'".green);
    fs.readFile(
        'data.json',
        (error, fileContent) => {
            res.send(JSON.parse(fileContent));
        }
    )


})

server.get("/products/:id", (req, res) => {
    console.log("He recibido una peticion Get al endpoint '/products/'".green);
    const productID = decodeURI(req.params.id)
    console.log(productID)
    fs.readFile(
        'data.json',
        (error, fileContent) => {
            let objSingleProduct
            let arrProducts = JSON.parse(fileContent)

            for (let i = 0; i < arrProducts.length; i++) {
                if (arrProducts[i]["productID"] == productID) {
                    objSingleProduct = arrProducts[i]
                }

            }
            res.send(objSingleProduct);
        }
    )


})

server.post('/products', [
    check('productName').trim().escape(),
    check('quantity').trim().escape(),
    check('price').trim().escape(),
    check('productID').trim().escape()
], (req, res) => {
    const body = req.body;
    console.log(body)
    fs.readFile(
        'data.json',
        (error, fileContent) => {
            let strProductName = body["productName"];
            let arrProducts = JSON.parse(fileContent)

            for (let i = 0; i < arrProducts.length; i++) {
                if (arrProducts[i]["productName"] == strProductName) {

                    res.send({ "error": "Ese productName ya existe. Por favor, indique otro" });
                } else {
                    let newID = 0
                    for (let i = 0; i < arrProducts.length; i++) {
                        if (newID >= parseInt(arrProducts[i]['productID'])) {
                            newID++
                        }
                    }
                    body['productID'] = String(newID)
                    fs.readFile(
                        'data.json',
                        (error, myProds) => {
                            console.log(JSON.parse(myProds));
                            let arrProds = JSON.parse(myProds);
                            arrProds.push(body);
                            fs.writeFile(
                                'data.json',
                                JSON.stringify(arrProds),
                                () => { console.log('Archivo editado con éxito!'.green) });
                        }
                    )

                }

            }
            res.send({ "ok": "Perfecto! Nuevo producto añadido!" });
        }
    )
})

server.delete("/products/:id", (req, res) => {
    console.log("He recibido una peticion Delete al endpoint '/products/'".green);
    const productID = decodeURI(req.params.id)
    console.log(productID)
    fs.readFile(
        'data.json',
        (error, fileContent) => {
            let objSingleProduct
            let arrProducts = JSON.parse(fileContent)

            for (let i = 0; i < arrProducts.length; i++) {
                if (arrProducts[i]["productID"] == productID) {
                    arrProducts.splice([i], 1)
                }

            }
            fs.writeFile('data.json',
                JSON.stringify(arrProducts),
                () => {
                    res.send({ "ok": "Perfecto! Producto borrado!" });
                })
        }
    )


})

server.put('/products', (req, res) => {
    const body = req.body;
    fs.readFile(
        'data.json',
        (error, fileContent) => {
            let strProductID = body["productID"];
            let arrProducts = JSON.parse(fileContent);
            let findProduct = true
            for (let i = 0; i < arrProducts.length; i++) {
                if (strProductID == arrProducts[i]["productID"]) {
                    console.log(arrProducts[i])
                    arrProducts.splice(arrProducts[i], 1, body);
                    fs.writeFile('data.json',
                        JSON.stringify(arrProducts),

                        () => {
                            findProduct = false;
                            res.send({ "ok": "Perfecto! Producto modificado!" })
                        });

                }

            }
            if (findProduct == false) {
                res.send({ "Error": "Error! El producto no existe!" })
            }
        }
    )

})




//Escuchando
server.listen(3000, () => {
    console.log('Escuchando en el puerto 3000'.rainbow)
})
