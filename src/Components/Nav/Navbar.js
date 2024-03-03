import React from 'react'
import './nav.css';
import person from '../../images/person.png';
import home from '../../images/home.png'
const Navbar = () => {
  return (
    <div className='nav'>
        <img src={home} alt="" height='28px' width='28px' />
        <img src={person} alt="" height='28px' width='28px' />
    </div>
  )
}

export default Navbar