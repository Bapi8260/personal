import React from 'react'
import './footer.css'
import face from './images/face1.png'
import what from './images/whatsapp.png'
import insta from './images/insta1.png'
import twit from './images/twiter1.png'
const Footer = () => {
  return (

    <>
    
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          RS
        </h3>
        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">Techlab © 2024</p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" />
          <p>
            <span>Rudra pratap swain</span>
          </p>
        </div>
        <div>
          <i className="fa fa-phone" />
          <p>+91 8260546697</p>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="mailto:support@company.com">bapi985377@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
          convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div className="footer-icons">
          <a href="#">
          <img className='face' src={face}></img>
          </a>
          <a href="#">
          <img className='what' src={what}></img>
          </a>
          <a href="#">
          <img className='insta' src={insta}></img>
          </a>
          <a href="#">
            <img className='twit' src={twit}></img>
          </a>
        </div>
      </div>
    </footer>
  </>
  


  )
}

export default Footer
