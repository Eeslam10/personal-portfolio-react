import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Sani Islam Muhammad,</span> frontend developer based in Nigeria.</h1>
        <p>I'm a frontend developer from Abuja, Nigeria with 4years experience in multiple tech companies like TOG Africa, Katsina Tech Hub and Neo Cloud Technologies ICT</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink> </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero