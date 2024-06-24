import React from 'react'
import './footer.css'
import footerLogo from  '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pinInt from '../Assets/pintester_icon.png'
import whatsapp from  '../Assets/whatsapp_icon.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-header">
            <img src={footerLogo} alt="" />
            <h1>SHOPWORLD</h1>
        </div>
        <div className="footer-list">
            <ul>
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer-social-icon">
            <img src={insta} alt="" />
            <img src={pinInt} alt="" />
            <img src={whatsapp} alt="" />
        </div>
        <div className="footer-copyright">
                {/* <span>&copy</span> */}
                <hr />
            Copyright  @2024 -- ALL Right Reserved by Rahul Soni 
            
        </div>
    </div>
  )
}
