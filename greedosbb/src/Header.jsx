import React from "react";
import "./header.css";
import {Link} from 'react-router-dom';


export default function Header() {
    return(
        <header>
            <nav>
                <Link to='/'>
                    <p>Home</p>
                </Link>
                <Link to='/about'>
                    <p>About GreedoBB</p>
                </Link>
            </nav>
        </header>
    )
}