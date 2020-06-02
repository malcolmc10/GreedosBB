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
                {/* still need to add a link to Fancy Button */}
                <Link to="">
                    <p>About</p>
                </Link>
                
            </nav>
        </header>
    )
}