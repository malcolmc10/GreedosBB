import React from 'react';
import "./People.css";
import {Link} from 'react-router-dom';

export default function People(props) {
    // functional components need to be configured.
    return (
        // I want to add an image to the characters below. based on affiliation.
        
        <div className="people">
            {props.pArray.map(person=>(
               <div className="person">
                <Link to={`/person/${person.name}`}>
                <h1>{person.name}</h1> 
               </Link>
               </div> 
               
               
            ))}
        </div>


    )
}


