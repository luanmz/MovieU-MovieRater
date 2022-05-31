import React, { useEffect, useState } from "react";
import './Main.css';
import Api from "../../api/Api";
import MovieRow from '../movieRow/MovieRow'
import Nav from "../nav/Nav";


export default function Main () {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const loadAll = async () => {
            // geting list
            let list = await Api.getHomeList()
            setMovieList(list)
        }

        loadAll()
    }, []);

    return(
        
        <div className="main-container">
            <Nav></Nav>
            <section className="lists">
                {movieList.map((item,key) => (
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    )
}