const express = require("express");
const api = require("./api")
const app = express();
const Filmes = require('./src/Models/Filmes.js');
const database = require("./db.js");
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.get("/", async (_req, res) => {
    await database.sync().then(_res=> console.log("Banco conectado")).catch(e=> console.log("Erro ao conectar: "+e))

    const recebe = await Filmes.findAll();
    return res.status(200).json(recebe)
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});