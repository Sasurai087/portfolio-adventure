import React from 'react'
import { Link } from 'react-scroll'
import './About.css'
import Profile from '../../images/profile.png'

const About = (props) => {
  return (
    <section id='section3' className='about'>
      <h1>ABOUT</h1>
      <div className='about-container flex'>
          <div className='about-points-wrap flex row'>
            <div className='about-points flex'>
              <i class="fab fa-medapps"></i>
              <div class='bold'>Intuitive</div>
              <p>Delivering a user-friendly experience is my priority.</p>
            </div>

            <div className='about-points flex'>
              <i class="fas fa-bolt" />
              <div class='bold'>Concise</div>
              <p>I strive for clear and efficient creation and communication.</p>
            </div>

            <div className='about-points flex'>
              <i class="fas fa-mobile-alt" />
              <div class='bold'>Efficient</div>
              <p></p>
            </div>
          </div>
          <div className='bar'></div>

          <h1>Skills</h1>
          <div className='about-info flex row'>
                  <i class="fab fa-react fa-5x"/>
                  <i class="fab fa-js-square" /> 
                  <i class="fab fa-html5"/>
                  <i class="fab fa-css3"/>
                  <i class="fab fa-github"/>
                  <i class="fab fa-node" />
                  <i class="fab fa-bootstrap"/>
                  <i class="fab fa-python"/>
          </div>


          <div className='about-info flex row'>
            <div className='about-skills row'>
              

              <div className='about-bio'>
                <img src={Profile} alt='hyper-squirrel' />
                <p>Hi there! <br />
                  I'm James, a self-taught front-end developer who's dabbled in sales, restaurant server, and tech support roles. Whether it be in my personal or professional life, I aim to create positive win-win experiences for all.<br />
                  <br />
                  I also love playing and teaching board games of all kinds, 
                  with Terraforming Mars being my latest frontier.<br />
                  <br />
                  Think I might be a good fit for your team?<br />
                  Take a look at <span className='about-highlight'>my resume</span>, or 
                  <Link to='section4' spy={true} smooth={true} duration={1000}>
                    <span className='about-highlight'> send me a message!</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
    

      </div>
    </section>
  )
}

export default About

//Previous skills section
    // {/* <h1>Skills</h1>
    //   <div className='about-icons'>
    //       <i class="fab fa-react fa-5x"/> 
    //       <span>React</span>
    //   </div>
    //   <div className='about-icons'>
    //     <i class="fab fa-js-square" /> 
    //     <span>Javascript</span>
    //   </div>

    //   <div className='about-icons'>
    //     <i class="fab fa-html5"/>
    //     <span>HTML</span>
    //   </div>

    //   <div className='about-icons'>
    //   <i class="fab fa-css3"/>
    //   <span>CSS</span>
    //   </div>


    //   <div className='about-icons'>
    //     <i class="fab fa-github"/>
    //     <span>Github</span>
    //   </div>


    //   <div className='about-icons'>
    //     <i class="fab fa-node" />
    //     <span>Node</span>
    //   </div>

    //   <div className='about-icons'>
    //     <i class="fab fa-bootstrap"/>
    //     <span>Bootstrap4</span>
    //   </div>

    //   <div className='about-icons'>
    //     <i class="fab fa-python"/>
    //     <span>Python</span>
    //   </div>
    //   </div> */}