import React,{useState} from 'react'
import '../styles/dashboard.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom';

function Students() {

    const [id, setId] = useState('')
    const [student, setStudent] = useState()
    const router = useHistory()

    const getStudent=(id)=>{
        axios.get(`http://localhost:5001/student-arrival/us-central1/app/${id}`).then((resp)=>{
            setStudent(resp.data)
        })
    }
console.log(student)
    return (
        <div className="dashboard">
            <div className="admin-left">
            <button onClick={()=>router.push('/dashboard')}>back to dashboard</button>
            </div>

            <div className="admin-right">
                <input value={id} onChange={(e)=> setId(e.target.value)} placeholder='search student by ID' className="search"></input><button onClick={()=> getStudent(id)} className="search-button">search</button>

                <div className='display-student'>

                    <div className='student-details'>
                        <h2>Student Details</h2>

                        <div className='s-details'>
                            <span> ID<h5>{student?.id}</h5></span>
                            <span> NAME<h5>{student?.name}</h5></span>
                            <h4>Attendance</h4>

                            {student?.arrival.map(data =>(
                                <div key={data.length} className='attend'>
                                    <span>DATE <h5>{data.date}</h5></span>
                                    <span>STATUS <h5>{data.status}</h5></span>
                                </div>
                            ))}
                            
                            
                        </div>
                    </div>

                    <div className='parent-details'>
                        <h2>Parent Details</h2>

                        <div className='p-details'>
                            <span> NAME<h5>{student?.parent.name}</h5></span>
                            <span> ADDRESS <h5>{student?.parent.address}</h5></span>
                            <span> EMAIL <h5>{student?.parent.email}</h5></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Students
