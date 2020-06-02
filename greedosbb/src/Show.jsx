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
    <p></p>
    </div>
    
    )
}


export default withRouter(Show);
