const express = require("express");
const api = require("./api")
const app = express();
const database = require('./Sql/db')
const filmes = require('./Sql/filmes')
const usuario = require('./Sql/usuario')

const sync = new Promise((resolve, reject)=>{
    if (database.sync()){
        resolve("BD sincronizado")
    }
    else{
        reject("Erro")
    }
}).then((message) => {
    console.log("this is the then: " + message)
}).catch((error) => {
    console.log("this is the catch: " + error)
})

//---------------------------------------------------------

const API_KEY = "7745c2cd007513d18df83f01e36a3027"

app.use(express.json())

app.get("/", (_req, res) => {
    return res.send("Rodando")
})

app.get("/trending", async (_req, res) => {
    const {data} = await api.get(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
    console.log(data)
    return res.send()
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});