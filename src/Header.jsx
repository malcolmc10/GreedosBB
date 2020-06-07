import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';
import Logo from "./Logo";

// below is the code for the header. includes link back to the home page.
export default function Header() {
    return(
        <header>
             <div className="logo">
             <Logo />
            </div>
            
            
                <div className="link">
                <Link to='/' className="topBar">
                    
                    <p>Home</p>
                    
                </Link>
                </div>
                
            
            
            
        </header>
        
    )
}