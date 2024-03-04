import React, { useState } from 'react'
import './dash.css';
import logo from '../../images/logo1.png';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate= useNavigate();
  const [email, setEmail]= useState();
  const [pass, setPass]= useState();
  const [err, setErr]= useState();

function handleClick(){
  if(email && pass){
    navigate('/home');
  }else{
    setErr('Please fill all the required fields')
  }

}
  return (
    <div className='dash-cont'>
        <div className="logo">
          <img src={logo} alt="" height='90px' width='90px' />
          <h3>We are Electric</h3>
        </div>
        <div className="fields">
          <input className='inp' onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='E-mail' />
          <input className='inp'  onChange={(e)=> setPass(e.target.value)} type="password" placeholder='Password'/>
          <button id='login' onClick={handleClick}>Login</button>
          <button id='forgot'>Forgot Password</button>
          <p style={{color:'red'}}>{err}</p>
        </div>
    </div>
  )
}

export default Dashboard