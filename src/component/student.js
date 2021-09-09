import React from 'react';
import './student.css';
import axios from 'axios'
import PersonIcon from '@material-ui/icons/Person';

function Student({id,name}) {


    const arrived = {date:new Date(), status:true}

    const updateStudent=(arrival, id)=>{
      axios.post(`http://localhost:5001/student-arrival/us-central1/updatingArrival?date=${arrival.date}&status=${arrival.status}&id=${id}`).then(()=>{
        console.log('updated')
      }).catch(err =>{
        console.log(err)
      })
    }

    return (
        <div className="studentDiv">
            <span><PersonIcon/> {id}</span>
            <span>{name}</span>
            <button onClick={()=> updateStudent(arrived,id)}>arrived</button>
        </div>
    )
}

export default Student;
