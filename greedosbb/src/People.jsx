import React from 'react';
import {link} from 'react-router-dom';



export default function People(props)  {
    
        return (
            <div className='Bounties'>
                {props.charactersArray && props.charactersArray.map(character =>(
                    <Link to={`/people/${character.name}`}/>
                ))}
                
            </div>
        )
    }


