import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <p>Hi! I'm Carlos Antonio Cherindza👋</p>
      <h1>Student of B.Tech IT  </h1>
      <p>Carlos Antonio Cherindza, 3/4 B.Tech IT- Information Technology at College of Engineering, Andhra University, India</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a href="/Carlos_Resume.pdf" download className="text-blue-500 underline">
            My Resume
          </a>
        </div>

      </div>
    </div>
  )
}

export default Hero
