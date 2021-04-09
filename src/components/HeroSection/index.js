import React from 'react'
import { Link } from 'react-scroll'
import '../../App.css'
import {Button} from '../Button'
import './HeroSection.css'
import Video from '../../videos/video-1.mp4'

function HeroSection () {
  return (
      <div id='section1' className='hero-container'>
        <video src={Video} autoPlay loop muted playbackRate='0.1' />
        <h1>James Ohsako</h1>
        <p>Front-end web developer</p>
        <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              <Link to='section2' spy={true} smooth={true} duration={1000}>
                View my work <i className='fas fa-arrow-right' />
              </Link>
            </Button>

        </div>
      </div>
  )
}
<Link to='section4' spy={true} smooth={true} duration={1000}></Link>

export default HeroSection;
