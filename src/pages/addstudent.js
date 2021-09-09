import React,{useState} from 'react';
import '../styles/dashboard.css';
import axios from 'axios'
import {useHistory} from 'react-router-dom';






function Addstudent() {

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    
    const [parentName, setParent] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
   


    const Data ={
        name: name,
        id: id,
        parent: {
            name:parentName,
            address: address,
            email: email
        },
        arrival:{
            date:new Date(),
            status:true
        }

    }

    const addStudent=(data)=>{
        axios.post(`http://localhost:5001/student-arrival/us-central1/postStudent?name=${data.name}&id=${data.id}&parentName=${data.parent.name}&address=${data.parent.address}&email=${data.parent.email}&date=${data.arrival.date}&status=${data.arrival.status}`).then(()=>{
          console.log('added')
        }).catch(err =>{
          console.log(err)
        })
      }

      const router = useHistory()


console.log(Data)
    return (
        <div className="dashboard">  
            <div className='admin-left'>
                <button onClick={()=>router.push('/dashboard')}>back to dashboard</button>
            </div>
          <div className='admin-right'>
            <div className='student-form'>
                    <input value={name} onChange={(e)=> setName(e.target.value)}  placeholder='student name'></input>
                    <input value={id} onChange={(e)=> setId(e.target.value)}  placeholder='student ID'></input>
                    <input value={parentName} onChange={(e)=> setParent(e.target.value)}  placeholder='parent name'></input>
                    <input value={address} onChange={(e)=> setAddress(e.target.value)}  placeholder='parent address'></input>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder='parent email'></input>
                    <button onClick={()=>addStudent(Data)} >ADD</button>
                </div>
          </div>
            
        </div>    
    )
}

export default Addstudent
