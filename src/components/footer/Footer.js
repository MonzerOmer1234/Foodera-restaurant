


import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faFacebookF , faXTwitter , faYoutube , faDribbble , faLinkedinIn , faInstagram } from  "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <div className='mt-5 text-center footer  '>
        <div className="container">
      <h2 className=' fw-semibold '>Hurry up! Subscribe our newsletter and get 25% Off</h2>
      <p>Limited time offer for this month. No credit card required.</p>
      <form action="">
        <input type="email" className=' d-block mx-auto mb-3 text-center' placeholder = "Email Address Here" />
        <input type="submit" value="Subscribe" className=' d-block mx-auto mb-3 subscribe' />
      </form>
     
      </div>
      <section className="footer position-relative">
        <ul className="list-unstyled d-flex justify-content-center pt-5 gap-3 text-white">
            <li>Register</li>
            <li>Forum</li>
            <li>Affiliate</li>
            <li>FAQ</li>
        </ul>
        <ul className="list-unstyled d-flex justify-content-center pt-3 gap-3 text-white">
            <li><FontAwesomeIcon icon={faFacebookF} /></li>
            <li><FontAwesomeIcon icon={faXTwitter} /></li>
            <li><FontAwesomeIcon icon={faYoutube} /></li>
            <li><FontAwesomeIcon icon={faDribbble} /></li>
            <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
        </ul>
        <p className=' position-absolute text-white text-center'>© 2021. Foodera. All rights reserved.</p>
        </section>
    </div>
  )
}

export default Footer