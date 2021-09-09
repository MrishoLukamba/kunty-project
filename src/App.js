
import './styles/App.css'
import React,{useContext} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Addstudent from './pages/addstudent';
import Announcement from './pages/announcement';
import Students from './pages/students';


function App() {
  
  return (
    

        <Router>
          <div>
          <Switch>
        
              <Route path='/dashboard'>
                  <Dashboard/>
              </Route>

              <Route path='/student'>
                  <Students/>
              </Route>

              <Route path='/announcement'>
                  <Announcement/>
              </Route>

              <Route path='/addstudent'>
                  <Addstudent/>
              </Route>
    
                <Route path="/">
                     <Home/>
                </Route>

                  </Switch>
                </div>
              </Router>

      
  )
}

export default App


