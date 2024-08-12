import React, { useState } from 'react'
import './nav.css'
import Aos from "aos";
import "aos/dist/aos.css";
import tog from './images/toggle1.png'
import cross1 from './images/cross1.png'
import { useEffect } from 'react';
const Nav = ({setdata,data}) => {
  useEffect(()=>{
    Aos.init({
      duration: 800,
    });
   },[])
  return (
    <div className='nav'  data-aos="fade-down">
        <div className='logo'>
            <span>RS</span>
        </div>
        <div className='list'>
            <a href='#'>Home</a>
            <a href='#'>Service</a>
            <a href='#'>Project</a>
            <a href='#'>Contact</a>
        </div>
        <div className='tog' onClick={()=>setdata(!data)}>
            {
              data==0?<img src={tog}></img>:<img src={cross1}></img>
            }
        </div>
      
    </div>
  )
}

export default Nav
