import React from "react";
import { useNavigate } from "react-router-dom";
import './MovieRow.css'

export default function MovieRow ({items, title}) {
    const navigate = useNavigate()
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {console.log(items)}
                    {items.data.length > 0 && items.data.map((item, key) => (                   
                        <div key={key} className="movieRow--item">
                            <img onClick={() => {navigate(`/${item.id}`)}} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}