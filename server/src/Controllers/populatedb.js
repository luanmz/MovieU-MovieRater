const api = require("../../api.js");
const API_KEY = "7745c2cd007513d18df83f01e36a3027";
const Filmes = require('../Models/Filmes');
const database = require("../../db.js");

(async () =>{
   await database.sync().then(_res=> console.log("Banco conectado")).catch(e=> console.log("Erro ao conectar: "+e))
})()


async function getData (_req, _res) {
    const {data} = await api.get(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
    console.log(data.results)
    return data.results
}


const populate = async () => {
    const listaFilmes = await getData()

    
    await listaFilmes.forEach(async filme => {
        await Filmes.create({
            original_title: filme.original_title ?? filme.original_name,
            poster_path: filme.poster_path,
            sinopse: filme.overview,
            release_date: filme.release_date ?? filme.first_air_date,
            vote_count: filme.vote_count,
            vote_average: filme.vote_average
        })
    });
}

populate()

module.exports = populate


