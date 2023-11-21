import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import { Link, useNavigate } from 'react-router-dom'
import Chatabot from '../chatbot/Chatabot'
import { toast } from 'react-toastify';

const LoginSignup = () => {

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in';
    if (id === null || id === '') {
      isproceed = false;
      errormessage += ' Emailid';
    }
    if (password === null || password === '') {
      isproceed = false;
      errormessage += ' password';
    }
    if (name === null || name === '') {
      isproceed = false;
      errormessage += ' username';
    }
    if (!isproceed) {
      toast.warning(errormessage)
    }
    return isproceed;
  }

  const handlesubmit = (e) => {
    
      e.preventDefault();

      let regobj = { name, password, id };
      // console.log(regobj);

      if (IsValidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(regobj)
      }).then((res) => {
        toast.success('Registered Successfully.');
        navigate('/home');
      }).catch((err) => {
        toast.error('Failed :' + err.message);
      });
    }
  }

  return (
    <>

      <div className='login1'>
        <Chatabot />
        <form className='containerL' onSubmit={handlesubmit} >
          <div className="headerL">
            <div className="textL"> Sign up</div>
            <div className="underlineL"></div>
          </div>

          <div className="inputs">
             <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='Name' value={name} onChange={e => namechange(e.target.value)} />
            </div>

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email Id' value={id} onChange={e => idchange(e.target.value)} />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password' value={password} onChange={e => passwordchange(e.target.value)} />
            </div>
          </div>

          <div className='sub'>
            <button>Submit</button>
          </div>


        </form>


      </div>


    </>
  )
}


export default LoginSignup
