import React from 'react';
import "./People.css";

export default function People(props) {
    // functional components need to be configured.
    return (

        <div>
            <h1>{props.person.name}</h1>
        </div>


    )
}


