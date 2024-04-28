import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Sani Islam Muhammad,</span> frontend developer based in Nigeria.</h1>
        <p>I'm a frontend developer from Abuja, Nigeria with 4years experience in multiple tech companies like TOG Africa, Katsina Tech Hub and Neo Cloud Technologies ICT</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero