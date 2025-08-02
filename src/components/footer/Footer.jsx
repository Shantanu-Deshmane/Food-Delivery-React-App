import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, dolor perspiciatis. Vel ab magni maiores cum fugit voluptate rem recusandae.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>ADDRESS</h2>
                <ul>
                    <li>+91 7666964743</li>
                    <li>A/P KARAD, Dist-Satara,MAHARASHTRA, 415122.</li>
                </ul>
            </div>
        </div>
            <hr />
            <p className='footer-copyright'>Copyright 2025 © foody.com - All Rights Reserved </p>
    </div>
  )
}
import './Footer.css'

export default Footer
