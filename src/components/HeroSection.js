import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection () {
  return (
    <div className='hero-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>Why aren't I playing board games right now?</p>
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > 
          CHECK IT
        </Button>
        <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        > 
          DO IT NOW <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;
