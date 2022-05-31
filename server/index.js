const express = require("express");
const api = require("./api")
const app = express();
const Filmes = require('./src/Models/Filmes.js');
const database = require("./db.js");
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.get("/", async (_req, res) => {
    await database.sync().then(res=> console.log("Banco conectado")).catch(e=> console.log("Erro ao conectar: "+e))

    const recebe = await Filmes.findAll();
    return res.status(200).json(recebe)
})

app.get("/:id", async (req, res) => {
    const {id} = req.params
    await database.sync().then(res=> console.log("Banco conectado")).catch(e=> console.log("Erro ao conectar: "+e))

    const recebe = await Filmes.findByPk(id);
    return res.status(200).json(recebe)
})

app.post("/movieavaliacao/:id", async (req, res) => {
    
    const {id} = req.params
    const {avaliacao} = req.body
    if (!avaliacao || isNaN(Number(avaliacao))) return
    console.log(avaliacao)

    await database.sync().then(res=> console.log("Banco conectado")).catch(e=> console.log("Erro ao conectar: "+e))

    const recebeFilme = await Filmes.findByPk(id);
    const novamedia = (recebeFilme.vote_count*recebeFilme.vote_average + Number(avaliacao)) / (recebeFilme.vote_count + 1)

    recebeFilme.update({
        'vote_count': recebeFilme.vote_count + 1,
        'vote_average': novamedia,
    })
    return res.status(200).json({status: "ok"})
})






app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});