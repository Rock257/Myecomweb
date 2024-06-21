import React from 'react'
import './hero.css'
import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroImage from '../Assets/hero_image.png'

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hero-hand-icon">
                <h2>NEW</h2>
                <img src={handIcon} alt="hand-icon" />
            </div>
            <h3>COLLECTION</h3>
            <h3>FOR EVERYONE</h3>
            <div className="hero-latest-btn">
                <div className="">Latest Collection</div>
                <img src={arrowIcon} alt="" />
            </div>
        </div>

        <div className="hero-right">
            <img src={heroImage} alt="" />
        </div>
    </div>
  )
}
