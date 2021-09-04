import {useState, useRef, useEffect} from 'react'
import '../styles/home.css'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import {useHistory} from 'react-router-dom'

function Home() {

  const router = useHistory()
  //const auth = getAuth()

  {/*const signin = event=>{
    event.preventDefault();
    createUserWithEmailAndPassword(auth,emailRef, passwordRef)
        .then(user =>{
          console.log(user)
        }).catch(err =>{
          console.log(err)
        })
  }*/}

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  

    return (
      <div className="container">
          <main className="main">
  
              <div className="form">
                  <label>Email</label>
                  <input ref={emailRef}></input>
  
                  <label>Password</label>
                  <input ref={passwordRef} ></input>
  
                  <button onClick={()=> router.push('/dashboard')} >signin</button>
              </div>
  
          </main>
  
        <footer className="footer">
        
        </footer>
      </div>
    );
  }
  
export default Home;
  








