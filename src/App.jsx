import { useState } from 'react'
 import './App.css'
import LoginSignup from './components/LoginSignup/LoginSignup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Header from './components/common/heading/Header';
import { ToastContainer } from 'react-toastify';


function App() {


  return (
    <>
      <Router>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path='/' element={<LoginSignup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/team' element={<Team />} /> 
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
