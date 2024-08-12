import React from 'react'
import './contact.css'
import img1 from'./images/msgimg1.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Contact = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      easing: 'linear'
    });
   },[])
  return (
    <div className='msg'>
        <div className='cap'>
            <span data-aos="zoom-out">Message me...</span>
        </div>
        <div className='mspart'>
          <div className='msimg' data-aos="fade-right">
            <img src={img1} alt=' '></img>
          </div>
        
           <div className='details' data-aos="fade-left">
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="dbbdde22-7f28-4da1-8ed6-2340aea6e00e"></input>
            <input name='Name' type='text' placeholder='Enter your name' required></input>
            <input name='Phone number'  type='text' placeholder='Enter your number' required></input>
            <input name='Email' type='email' placeholder='Enter your email' required></input>
            <textarea name='Message' rows={5} cols={50} required placeholder='enter your message'></textarea>
            <input className='sub' type='submit' value="submit"></input>
            </form>
           </div>
           </div>
      
      
      </div>
  )
}

export default Contact
