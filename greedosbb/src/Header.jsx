import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';

// below is the code for the header. includes link back to the home page.
export default function Header() {
    return(
        <header>
            <nav>
                <Link to='/'>
                    <p>Home</p>
                </Link>
                
            </nav>
        </header>
    )
}