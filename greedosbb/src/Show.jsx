import React from 'react'
import { withRouter } from 'react-router-dom'
import './Show.css'

function Show(props) {
    const personName = props.match.params.personName
    const selectedPerson = props.pArray.find(person => {
        return person.name === personName
    })
    console.log(selectedPerson)
    return (
        <div>
            <h1 className="suga">{selectedPerson && selectedPerson.name}</h1>
    <p><span>Gender:</span>{selectedPerson && selectedPerson.gender}</p>
    <p><span>Birth Year:</span>{selectedPerson && selectedPerson.birth_year}</p>
    <p><span>Mass:</span>{selectedPerson && selectedPerson.mass}</p>
    <p><span>Height:</span>{selectedPerson && selectedPerson.height}</p>
    <p><span>Hair Color:</span> {selectedPerson && selectedPerson.hair_color}</p>
    <p><span>Skin Color:</span> {selectedPerson && selectedPerson.skin_color}</p>
    <p><span>Eye Color:</span> {selectedPerson && selectedPerson.eye_color}</p>

    
    
    </div>
    
    )
}


export default withRouter(Show);
