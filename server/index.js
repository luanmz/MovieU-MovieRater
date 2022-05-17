const express = require("express");
const api = require("./api")
const app = express();
const database = require('./db')
const filmes = require('./src/Models/Filmes')


database.sync().then(res=> console.log("Banco conectado")).catch(e=> console.log("Erro ao conectar: "+e))


//---------------------------------------------------------

const API_KEY = "7745c2cd007513d18df83f01e36a3027"

app.use(express.json())

app.get("/", (_req, res) => {
    return res.send("Rodando")
})

app.get("/trending", async (_req, res) => {
    const {data} = await api.get(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
    console.log(data)
    return res.send(data.results[0].title)
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});