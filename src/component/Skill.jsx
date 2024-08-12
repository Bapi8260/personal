import React, { useState } from 'react'
import './skill.css'
import img10 from './images/html.png'
import img9 from './images/mysqlpng.png'
import img8 from './images/javascript.png'
import img7 from './images/java.png'
import img6 from './images/css.png'
import img5 from './images/boot.png'
import img4 from './images/react.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Skill = () => {
  useEffect(()=>{
    Aos.init({
      duration: 900,
      easing:'linear'
    });
   },[])
  const[value,setValue]=useState(1);
  return (
    <div className='part'>
         <span className='heading' data-aos="fade-down" >Skills...</span>
      <div className='tab' data-aos="zoom-in">
        <div className='tabnav'>
           <span onClick={()=>setValue(1)}>Frontend</span>
           <span onClick={()=>setValue(2)}>Backend</span>
           <span onClick={()=>setValue(3)}>Database</span>
        </div>
        <div className='tabcon'>
          {
            value==1?<div className='resize'>
               <diiv className='inresize'>
                <img src={img10}></img>
                <span>HTML</span>
               </diiv>
               <diiv className='inresize'>
                <img src={img6}></img>
                <span>CSS</span>
               </diiv>
               <diiv className='inresize'>
                <img src={img5}></img>
                <span>BOOTSTRAP</span>
               </diiv>
               <diiv className='inresize'>
                <img src={img8}></img>
                <span>JAVASCRIPT</span>
               </diiv>
               <diiv className='inresize'>
                <img src={img4}></img>
                <span>REACT</span>
               </diiv>

            </div>:value==2?<div className='resize'><div className='resize1'><img src={img7}></img><span>JAVA</span></div></div>:value==3?<div className='resize'><div className='resize1'><img src={img9}></img><span>MY sql</span></div></div>:1
          }
        </div>
      </div>
    </div>
  )
}

export default Skill
