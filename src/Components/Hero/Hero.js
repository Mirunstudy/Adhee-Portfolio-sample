import React from 'react'
import "./Hero.css"
import profile_img2 from "../../assets/profile_img2.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_img2}  alt="" />
      <h1><span>I'm Mirunu Kirushanth,</span> frontend developer based in Sri-Lanka.</h1>
      <p>"I am a frontend developer from Batticaloa, focused on building responsive and 
        intuitive web interfaces. I bring creativity and precision to my work, aiming to create 
        seamless user experiences. Explore my portfolio to see projects that reflect my skills in 
        transforming ideas into dynamic digital applications."
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
