import React from 'react';
import './student.css';
import PersonIcon from '@material-ui/icons/Person';

function Student({id,name}) {
    return (
        <div className="studentDiv">
            <span><PersonIcon/> {id}</span>
            <span>{name}</span>
            <button>arrived</button>
        </div>
    )
}

export default Student;
