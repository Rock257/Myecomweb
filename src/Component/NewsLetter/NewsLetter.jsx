import React from 'react'
import './newsletter.css'

export default function NewsLetter() {
  return (
    <div className='news-letter' >
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>subscribe to our newsletter and stay updated</p>
        <div className="subscribe">
            <input type="text"  placeholder='Email'/>
        <button>Subscribe</button>
        </div>
        
    </div>
  )
}
