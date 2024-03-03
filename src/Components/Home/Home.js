import React from 'react'
import './Home.css'
import per from '../../images/per.png';
import mop from '../../images/moptro.png';
import Navbar from '../Nav/Navbar';

const Home = () => {
  return (
    <div className='home-cont'>
        <div className="one">
            <img src={per} alt=""  height='50px' width='50px' />
        </div>
        <div className="two">
            <img src={mop} alt="" height='70px' width='71px' />
        </div>
        <div className="three">
            <h3>Employee Productivity Dashboard</h3>
        </div>
        <div className="four">
            <div>
                <div>
                    <p>Productivity on Monday</p>
                    <p>4%</p>
                </div>
                <div>
                    <p>hhhhhhhhhhhh</p>
                </div>
            </div>
        </div>

        <Navbar/>
    </div>
  )
}

export default Home