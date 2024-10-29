import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.png"
import profile_about2 from "../../assets/about_profile2.png"

const About = () => {
  return (
    <div id= "about"className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_about2} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a passionate front-end developer with a deep love for creating 
                    intuitive, responsive, and visually appealing web experiences. Driven 
                    by curiosity and the pursuit of excellence, I focus on crafting user-centered 
                    designs that blend functionality with elegance...
                </p>
                <p>I'm studying for a Bachelor of Science in Electronics and Automation 
                    technologies at the University of Colombo and a Bachelor of Engineering 
                    Technology at the University of Sri  Jayewardenepura. Based in Colombo, Sri Lanka, 
                    I focus on integrating my knowledge of electronics with automation to prepare for a 
                    career that bridges engineering and technology...
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"90%"}} />
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"80%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>Bootstrap</p><hr style={{width:"75%"}} />
                </div>
                <div className="about-skill">
                    <p>C pro</p><hr style={{width:"90%"}} />
                </div>
                <div className="about-skill">
                    <p>Python</p><hr style={{width:"90%"}} />
                </div>
                <div className="about-skill">
                    <p>CADD</p><hr style={{width:"75%"}} />
                </div>
                <div className="about-skill">
                    <p>SolidWorks</p><hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>Arduino</p><hr style={{width:"85%"}} />
                </div>
                <div className="about-skill">
                    <p>Thinker CADD</p><hr style={{width:"100%"}} />
                </div>
                <div className="about-skill">
                    <p>Capcut</p><hr style={{width:"100%"}} />
                </div>
                <div className="about-skill">
                    <p>Photoshop</p><hr style={{width:"65%"}} />
                </div>
                <div className="about-skill">
                    <p>Illustrator</p><hr style={{width:"60%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>30+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>25+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
