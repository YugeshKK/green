import React, { useState } from 'react'
import './emp.css';
import per from '../../images/per.png';
import mop from '../../images/moptro.png';
import search from '../../images/search.png';
import Navbar from '../Nav/Navbar';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
    const [text, setText]= useState();
    const navigate= useNavigate();

    //Sample Employee Data
    const employee=[
        {id:1,
        name:'Arjun',
        dob:'16-07-2001',
        role:'Software Engineer'
    },
        {id:2,
            name:'Leo',
            dob:'11-07-2002',
            role:'Software Developer'
        },
        {id:3,
            name:'Rajini',
            dob:'12-12-2003',
            role:'Web Developer'
        },
        {id:4,
            name:'Vijay',
            dob:'11-01-2005',
            role:'Product Manager'
        },
    ]
    const [filtered, setFilterd]= useState(employee);

    //Dynamic Searching 

    const handleChange=(e)=>{
        const query= e.target.value;
        setText(query);
        const filter = employee.filter(item => {
            const lowerCaseName = item.name.toLowerCase();
            const lowerCaseQuery = query.toLowerCase();
            const includes = lowerCaseName.includes(lowerCaseQuery);
            return includes;
          });
        setFilterd(filter);
    }

  return (
    <div className='emp-cont'>
       <div className="one">
            <h3 style={{color:'#376E3F'}} onClick={()=> navigate('/')} >Logout</h3>
            <img src={per} alt=""  height='50px' width='50px' />
        </div>
        <div className="two">
            <img src={mop} alt="" height='70px' width='71px' />
        </div>
        <div className="thre">
            <input type="text" value={text} onChange={handleChange} placeholder='Dynamic search with name' />
            <img src={search}  width='25px' height='25px' alt="" />
        </div>
        <div className="fou">
            {filtered.map((item, index)=>(
                <div className="emp" key={index}>
                <div className="details">
                    <p>EMP:ID : <span><b>{item.id}</b></span></p>
                    <p>Name : <span><b>{item.name}</b></span></p>
                    <p>DOB : <span><b style={{color:'orange'}} >{item.dob}</b></span></p>
                    <p>Role : <span><b style={{color:'green'}} >{item.role}</b></span></p>
                </div>
                <div className="nn">{item.id}</div>
            </div>
            ))}

        </div>
    <Navbar/>
    </div>
  )
}

export default Employee