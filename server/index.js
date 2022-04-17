const express = require("express");
const api = require("./api")
const app = express();


app.use(express.json())

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});

app.get("/", (req, res) => {
    return res.send("Rodando")
})

app.get("/pokemon/:id", async (req, res) => {
    const {id} = req.params
    const {data} = await api.get(`pokemon/${id}`)
    
    return res.send({nome: data.name})
})
