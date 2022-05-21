const express = require("express");
const api = require("../../api.js")
const app = express();

app.use(express.json())

app.get("/", (_req, res) => {
    return res.send("Rodando")
})

 