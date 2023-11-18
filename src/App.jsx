import { useState } from 'react'
 import './App.css'
import LoginSignup from './components/LoginSignup/LoginSignup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import Team from './components/team/Team';
// import Contact from './components/contact/Contact';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginSignup />} />
          {/* <Route path='/team' element={<Team />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </Router>

    </>
  )
}

export default App
