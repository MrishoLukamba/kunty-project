import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import '../styles/dashboard.css'
import Student from '../component/student';
import {app} from './home'



function Dashboard() {

   

    const [on, setOn] = useState(false)

    const display=(e)=>{
        e.preventDefault();
        on===false?setOn(true):setOn(false)
    }
    
    //const [data, setData] = useState(Data)

    const [students, setStudents] = useState()

    const router = useHistory()

   // const logout=(event)=>{
    //    event.preventDefault();
      //  app.auth().signOut().then(()=>{
        //    console.log('user is logged out')
        //}).catch(err =>{
        //    console.log(err)
        //})
    //}
   

    const getStudents=()=>{
      axios.get('http://localhost:5001/student-arrival/us-central1/getStudents').then((resp)=>{
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
                <button className="button" onClick={()=> app.auth().signOut()}>log out</button>
                <button onClick={()=> router.push('/addstudent')} className="button" >Add Student</button>
                <button onClick={()=> router.push('/announcement')} className="button">Announcment</button>
                <button onClick={()=> router.push('/student')} className="button">student details</button>
            </div>

            <div className="admin-right">
                
                   { students?.map(({id,name})=>(
                        <Student key={id} id={id} name={name} />

                    ))}
                

            </div>

            
        </div>
    )
}

export default Dashboard;
