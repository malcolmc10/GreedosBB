import React from 'react';
import "./People.css";

export default function People(props) {
    // functional components need to be configured.
    return (
        // I want to add an image to the characters below. based on affiliation.
        <div className="people">
            {props.pArray.map(person=>(
               <div className="person">
                <h1>{person.name}</h1> 
                
                 
               </div> 
            ))}
        </div>


    )
}


