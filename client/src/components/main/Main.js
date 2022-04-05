import React, { useEffect } from "react";
import './style.css';
import Nav from '../nav/Nav'
import Api from "../../api/Api";


export default function Main () {

    useEffect(() => {
        const loadAll = async () => {
            // geting list
            let list = await Api.getHomeList()
            console.log(list)
        }

        loadAll()
    }, []);

    return(
        <div className="main-container">
            <Nav/>
        </div>
    )
}