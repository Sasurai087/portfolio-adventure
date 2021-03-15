import React from 'react'
import '../../App.css'
import {Button} from '../Button'
import './HeroSection.css'

function HeroSection () {
  return (
    <div className='hero-container'>
      <h1>Hi there! I'm <span>James Ohsako</span>, <br /> a front-end web developer.</h1>
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
