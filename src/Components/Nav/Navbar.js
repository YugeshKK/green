import React from 'react'
import './nav.css';
import person from '../../images/person.png';
import home from '../../images/home.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate= useNavigate();

  return (
    <div className='nav'>
        <img src={home} onClick={()=> navigate('/home')} alt="" height='28px' width='28px' />
        <img src={person} onClick={()=> navigate('/employees')} alt="" height='28px' width='28px' />
    </div>
  )
}

export default Navbar