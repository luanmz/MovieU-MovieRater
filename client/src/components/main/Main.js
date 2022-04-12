import React, { useEffect, useState } from "react";
import './Main.css';
import Nav from '../nav/Nav'
import Api from "../../api/Api";
import MovieRow from '../movieRow/MovieRow'


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
            <Nav/>
            <section className="lists">
                {movieList.map((item,key) => (
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    )
}