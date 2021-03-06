import React from 'react';
import "./People.css";
import {Link} from 'react-router-dom';


export default function People(props) {
    
    return (
        
        
        <div className="people">
            {props.pArray.map(person=>(
               <div className="person">
                <Link to={`/person/${person.name}`}>
                <img src={require('./Greedo-Seal.png')} />
                <h3>{person.name}</h3> 
                
               </Link>
               </div> 
               
               
            ))}
        </div>


    )
}


