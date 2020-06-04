import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';
import logo from "./Greedos-Bounty-Board-Logo.png";

// below is the code for the header. includes link back to the home page.
export default function Header() {
    return(
        <header>
             
            
            <nav>
            
            
                
                <Link to='/' className="topBar">
                    
                    <p>Home</p>
                    
                </Link>
                
                
            </nav>
            
            
        </header>
        
    )
}