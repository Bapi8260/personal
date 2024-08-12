import React from 'react'
import './service.css'
import img1 from './images/ads1.png'
import img2 from './images/deploy1.png'
import img3 from './images/maintain1.png'
import img4 from './images/design1.png'
import img5 from './images/devlop1.png'
import img6 from './images/domain1.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Service = () => {
  useEffect(()=>{
    Aos.init({
      duration: 900,
      easing:'linear'
    });
   },[])
  return (
    <div className='serv'>
      <span  data-aos="fade-down" >Services...</span>
      <div className='rest' data-aos="fade-up">
      <div className='res' style={{backgroundImage:"linear-gradient(#ff839d,#f50b9a)"}}>
        <img src={img4}></img>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, id.</span>
      </div>
      <div className='res' style={{backgroundImage:"linear-gradient(#d0ffae,#34ebe9)"}}>
      <img src={img5}></img>
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, id.</span>
      </div>
      <div className='res' style={{backgroundImage:"linear-gradient(#fec180,#ff8993)"}}>
      <img src={img2}></img>
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, id.</span>
      </div>
      <div className='res' style={{backgroundImage:"linear-gradient(#efbad3,#a254f3)"}}>
      <img src={img6}></img>
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, id.</span>
      </div>
      <div className='res' style={{backgroundImage:"linear-gradient(#f3dcfb,#679fe4)"}}>
      <img src={img3}></img>
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, id.</span>
      </div>
      <div className='res' style={{backgroundImage:"linear-gradient(#6acbe0,#6859ea)"}}>
      <img src={img1}></img>
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, id.</span>
      </div>
      </div>
    </div>
  )
}

export default Service
