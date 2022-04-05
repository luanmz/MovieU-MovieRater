import React from "react";
import './style.css'
import logo from '../../assets/logo-white.png'

export default function main () {
    return(
        <div className="main-container">
            <div className="navbar">
                <img src={logo}></img>
            </div>
        </div>
    )
}