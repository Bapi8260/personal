import React, { useEffect,useState} from 'react'
import './main.css'
import img from './images/bapipic-removebg.png'
import cv from './images/cv2.pdf'
import Aos from "aos";
import "aos/dist/aos.css";
const First1 = ({data}) => {
    useEffect(()=>{
      Aos.init({
        duration: 800,
         easing: 'linear'
      });
    },[])
    console.log(data);
  return (
    <div className='main'>
      <div className={ `toggle ${data?"toggle1":""}`}>
            <a href='#'>Home</a>
            <a href='#'>Service</a>
            <a href='#'>Project</a>
            <a href='#'>Contact</a>
      </div>
      <div className='content'>
        <div className='inncontent'  data-aos="fade-right">
        <span>Iam</span>
        <span>Bapi...</span><br/>
        <span> At est quas tempore quae, voluptates nulla temporibus sunt. Sed, atque impedit voluptas error repellat maiores nostrum praesentium accusamus doloremque, illo non!
        </span><br/>
        <a href={cv} download>
        <button>Download CV</button>
        </a>
        </div>
        <div className='box'  data-aos="fade-left">
           <img src={img} alt='mypic'/>
        </div>
     </div>
    </div>
  )
}

export default First1
