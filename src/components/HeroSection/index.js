import React from 'react'
import '../../App.css'
import {Button} from '../Button'
import './HeroSection.css'

function HeroSection () {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted playbackRate='0.1' />
      <h1><span>James Ohsako</span> <br /> Front-end web developer</h1>
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > 
          View my work <i className='fas fa-arrow-right' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;
