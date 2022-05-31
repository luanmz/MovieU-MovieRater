import React from "react";
import './Nav.css'
import logo from '../../assets/logo-white.png'
import { Link } from "react-router-dom";

export default function Nav () {
    return(
        <div className="nav-container">
            <div className="navbar">
                <Link to='/'> <img src={logo}></img> </Link>
            </div>
        </div>
    )
}