import React,{useState, useEffect,useRef} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import '../styles/dashboard.css'
import Student from '../component/student';





function Dashboard() {

   

    const [on, setOn] = useState(false)

    const display=(e)=>{
        e.preventDefault();
        on===false?setOn(true):setOn(false)
    }
    
    //const [data, setData] = useState(Data)

    const [students, setStudents] = useState()

    const router = useHistory()
   

    

    const updateStudent=(arrival)=>{
      axios.put(`http://localhost:5001/student-arrival/us-central1/updatingArrival?date=${arrival.date}&status=${arrival.status}`).then(()=>{
        console.log('updated')
      }).catch(err =>{
        console.log(err)
      })
    }

    const getStudents=()=>{
      axios.get('http://localhost:5001/student-arrival/us-central1/getStudent').then((resp)=>{
        setStudents(resp.data)
        
      }).catch(err =>{
        console.log(err)
      })
    }

    useEffect(()=>{
      getStudents()
    },[])


    return (
        <div className="dashboard">
            <div className='admin-left'>
                <button className="button" onClick={()=>router.push('/')}>log out</button>
                <button onClick={()=> router.push('/addStudent')} className="button" onClick={display}>Add Student</button>
                <button  className="button">Announcment</button>
                <button className="button">student details</button>
            </div>

            <div className="admin-right">
                
                   { students?.map(({id,name})=>(
                        <Student key={id} id={id} name={name}/>

                    ))}
                

            </div>

            
        </div>
    )
}

export default Dashboard;
