import React from 'react'
import './dash.css';
import logo from '../../images/logo1.png';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate= useNavigate();

  return (
    <div className='dash-cont'>
        <div className="logo">
          <img src={logo} alt="" height='90px' width='90px' />
          <h3>We are Electric</h3>
        </div>
        <div className="fields">
          <input className='inp' type='email' placeholder='E-mail' />
          <input className='inp' type="password" placeholder='Password'/>
          <button id='login' onClick={()=> navigate('/home')}>Login</button>
          <button id='forgot'>Forgot Password</button>
        </div>
    </div>
  )
}

export default Dashboard