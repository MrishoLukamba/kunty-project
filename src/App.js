
import './styles/App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Addstudent from './pages/addstudent';

function App() {
  return (
    <Router>
    <div>
      <Switch>
          <Route path='/addStudent'>
              <Addstudent/>
          </Route>
          <Route path='/dashboard'>
              <Dashboard/>
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


