import React from 'react'
import "./Hero.css"
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow_icon.png'
import men from '../../assets/men.webp'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
           <div> <h2>Best Deals! Best Prices!</h2></div>
           <div className="hand-hand-icon">
            <p>New</p>
            <img src={hand_icon} height="50px"alt=""></img>
            <p>Collections</p>
            <p>For Everyone</p>
           </div>
        </div>
        <div className="hero-latest-btn">
        <div>Latest Collections</div>
        <img src={arrow_icon} alt="" height={30}></img>



        </div>


        <div className="hero-right">
        <img src={men} alt=""height=""/>
        </div>
    </div>
  )
}

export default Hero