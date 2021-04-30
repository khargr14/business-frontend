import React from 'react'
import { connect } from 'react-redux';
import { deleteContacted } from '../actions/deleteContacted';


const Contacteds = (props) => {
    const handleDelete = (contacted) => {
        props.deleteContacted(contacted.id, contacted.business_id);
    }

    return (
        <div>
            {props.contacteds && props.contacteds.map(contacted =>
                <li key={contacted.id}>
                    <h4> {contacted.name}</h4> - {contacted.number}- {contacted.email}- {contacted.date}- {contacted.message} <button onClick={() => handleDelete(contacted)}>Delete</button>
                </li>)}

        </div>
    )
}

export default connect(null, { deleteContacted })(Contacteds);