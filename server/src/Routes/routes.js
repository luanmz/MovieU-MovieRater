const express = require("express");
const cors = require('cors')
const api = require("../../api.js")
const app = express();
const Filmes = require('../Models/Filmes');
const database = require("../../db.js");

app.use(express.json())
app.use(cors())

app.get("/", async (_req, res) => {
    await database.sync().then(_res=> console.log("Banco conectado")).catch(e=> console.log("Erro ao conectar: "+e))

    const recebe = await Filmes.findAll();
    return res.status(200).json(recebe)
})

 