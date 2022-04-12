import React from "react";
import './Nav.css'
import logo from '../../assets/logo-white.png'

export default function Nav () {
    return(
        <div className="nav-container">
            <div className="navbar">
                <img src={logo}></img>
            </div>
        </div>
    )
}