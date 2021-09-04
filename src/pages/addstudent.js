import React,{useState} from 'react';
import '../styles/dashboard.css';
import axios from 'axios'



const addStudent=(data)=>{
    axios.post(`http://localhost:5001/student-arrival/us-central1/postStudent?name=${data.name}&id=${data.id}&parentName=${data.parent.name}&address=${data.parent.address}&email=${data.parent.email}&date=${data.arrival.date}&status=${data.arrival.status}`).then(()=>{
      console.log('added')
    }).catch(err =>{
      console.log(err)
    })
  }


function Addstudent() {

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    
    const [parentName, setParent] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate ]= useState('')
    const [status, setStatus] = useState('')


    const Data ={
        name: name,
        id: id,
        parent: {
            name:parentName,
            address: address,
            email: email
        },
        arrival:{
            date:date,
            status:status
        }

    }

    return (
        <div className="dashboard">    
            <div className='student-form'>
                <input value={name} onChange={(e)=> setName(e.target.value)}  placeholder='student name'></input>
                <input value={id} onChange={(e)=> setId(e.target.value)}  placeholder='student ID'></input>
                <input value={parentName} onChange={(e)=> setParent(e.target.value)}  placeholder='parent name'></input>
                <input value={address} onChange={(e)=> setAddress(e.target.value)}  placeholder='parent address'></input>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder='parent email'></input>
                <input value={date} onChange={(e)=> setDate(e.target.value)}  placeholder='date'></input>
                <input value={status} onChange={(e)=> setStatus(e.target.value)}  placeholder='status'></input>
                <button onClick={addStudent(Data)} >ADD</button>
            </div>
        </div>    
    )
}

export default Addstudent
