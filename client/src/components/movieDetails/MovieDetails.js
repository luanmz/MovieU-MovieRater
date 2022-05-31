import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Api from '../../api/Api.js'
import Nav from "../nav/Nav.js";
import './MovieDetails.css'


export default function MovieDetails() {

    const [movie, setMovie] = useState() 
    const [nota, setNota] = useState("0") 
    const { id } = useParams()
    
    const loadMovie = async () => {
        // geting list
        let movie = await Api.getMovieById(id)
        setMovie(movie.data)
    }
    
    useEffect(() => {
        loadMovie()
    }, []);

    const handleSubmit = async () => {
        const result = await Api.setRate(id, nota)
        if (result.data.status == "ok") {
            loadMovie()
        }
    }
       


    

    

    return (
        <>
            {
                movie ?
                    (   <>  
                            <Nav/>
                            <section className="banner" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}></section>
                            <main>
                                <img className="poster" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
                                <div className="information">
                                    <h1 className="title">{movie.original_title}</h1>
                                    <p className="description">{movie.sinopse}</p>
                                    <br></br>
                                    <p className="vote-count">Total de votos: {movie.vote_count}</p>
                                    <p className="vote-average">Nota: {Number(movie.vote_average).toFixed(1)}</p>
                                </div>
                            </main>
                            <div className="vote-area">
                                <h3>Avalie esse filme: {nota}</h3>
                                <input onChange={(event) => {setNota(event.target.value)}} className="slider" type="range" defaultValue={0} max={10} min={0} step={0.1}></input>
                                <button onClick={handleSubmit}>Enviar</button>
                            </div>
                            
                            
                        </>
                    )
                    :
                    "Carregando"
            }
        </>
    )
}