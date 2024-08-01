import React from 'react'
import './Hero.css'
import profile_img from '../../../src/assets/hudor.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>Hassan Lawal,</span> frontend developer based in Nigeria.</h1>
        <p>I'm a frontend developer from Abuja, Nigeria with 4years experience in Katsina Tech Hub and ICT Hassan Usman Katsina Polytechnic</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink> </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero