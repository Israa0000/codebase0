const express = require("express") 

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//el cliente quiere meter un dato

app.use(express.static("public")) //crear una carpeta en la que todos pueden entrar

const frutas = ["manzana"]

app.get("/frutas", (req,res) => {
    console.log(req.ip) // la ip del usuario que ha hecho la peticion
    res.json(frutas)
}) //espera un string(lugar de endpoint), y una funcion (peticion/request y respuesta)

app.post("/frutas", (req,res) => {
    const fruta = req.body.fruta;
    frutas.push(fruta)
    console.log("Esto ha llegado desde el cliente: ", fruta)
    res.json(frutas)
})

app.listen(3000, () => console.log("Servidor funcionando en 3000")) 
// los valores "el puerto , lo que quiero q haga cuando este se lance"

