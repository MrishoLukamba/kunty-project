
import {useState, useEffect} from 'react'
import '../styles/home.css'
import  "firebase/compat/auth";
import firebase from "firebase/compat/app";
//import { getAnalytics } from "firebase/analytics";
import {useHistory} from 'react-router-dom'
//import { firebaseConfig } from '../firebase';



const firebaseConfig = {
  apiKey: "AIzaSyDCXlaeLS6qhg9JVk_VsDi_b89tFWTs-Sk",
  authDomain: "student-arrival.firebaseapp.com",
  projectId: "student-arrival",
  storageBucket: "student-arrival.appspot.com",
  messagingSenderId: "462546293872",
  appId: "1:462546293872:web:c108133388fffafaf950b5",
  measurementId: "G-P45DJJNDBY"
};


export const app = firebase.initializeApp(firebaseConfig);




function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

 
  


  //const analytics = getAnalytics(app);

  const router = useHistory()
  //const auth = getAuth()



  const signin = event=>{
    event.preventDefault();
    app.auth().signInWithEmailAndPassword(email, password)
        .then(user =>{
          console.log(user.user)
        }).catch(err =>{
          console.log(err)
        })
  }

  

    return (
      <div className="container">
          <main className="main">
  
              <div className="form">
                  <label>Email</label>
                  <input value={email} onChange={(e)=> setEmail(e.target.value)}></input>
  
                  <label>Password</label>
                  <input value={password} onChange={(e)=> setPassword(e.target.value)} ></input>
  
                  <button onClick={signin} >signin</button>
              </div>
  
          </main>
  
        <footer className="footer">
        
        </footer>
      </div>
    );
  }
  
export default Home;
  








