import React from 'react'
import './Home.css'
import per from '../../images/per.png';
import mop from '../../images/moptro.png';
import Navbar from '../Nav/Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate= useNavigate();
    
  return (
    <div className='home-cont'>
        <div className="one">
        <h3 style={{color:'#376E3F', cursor:'pointer'}} onClick={()=> navigate('/')} >Logout</h3>
            <img src={per} alt=""  height='50px' width='50px' />
        </div>
        <div className="two">
            <img src={mop} alt="" height='70px' width='71px' />
        </div>
        <div className="three">
            <h3>Employee Productivity Dashboard</h3>
        </div>
        <div className="four">
            <div className='fd'>
                <div className='sd'>
                    <p>Productivity on Monday</p>
                    <p className='num'>4%</p>
                </div>
                <div className='td'>
                    <p className='pp' style={{width:'4px'}} ></p>
                </div>
            </div>
            <div className='fd'>
                <div className='sd'>
                    <p>Productivity on Monday</p>
                    <p className='num'>92%</p>
                </div>
                <div className='td'>
                    <p className='pp' style={{width: '183px'}}></p>
                </div>
            </div>
            <div className='fd'>
                <div className='sd'>
                    <p>Productivity on Monday</p>
                    <p className='num'>89%</p>
                </div>
                <div className='td'>
                    <p className='pp' style={{width: '132px'}}></p>
                </div>
            </div>
            <div className='fd'>
                <div className='sd'>
                    <p>Productivity on Monday</p>
                    <p className='num'>80%</p>
                </div>
                <div className='td'>
                    <p className='pp' style={{width: '132px'}}></p>
                </div>
            </div>
            <div className='fd'>
                <div className='sd'>
                    <p>Productivity on Monday</p>
                    <p className='num'>90%</p>
                </div>
                <div className='td'>
                    <p className='pp' style={{width: '146px'}} ></p>
                </div>
            </div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Home