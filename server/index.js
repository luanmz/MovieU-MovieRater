const express = require("express");
const api = require("./api")
const app = express();

const API_KEY = "7745c2cd007513d18df83f01e36a3027"


app.use(express.json())

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});

app.get("/", (req, res) => {
    return res.send("Rodando")
})

app.get("/trending", async (req, res) => {
    const {data} = await api.get(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
    
    return res.send(data)
})
