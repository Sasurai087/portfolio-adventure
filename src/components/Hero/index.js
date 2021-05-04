import React from 'react'
import { Link } from 'react-scroll'
import {Button} from '../Button'
import { HeroButton, HeroH1, HeroP, HeroStyled, HeroVideo, HeroButtonArrow } from './HeroStyles'
import Video from '../../videos/video.mp4';


function HeroSection () {
  return (
      <HeroStyled id='section1'>
        <HeroVideo src={Video} autoPlay loop muted playbackRate='0.1' />
        <HeroH1>James Ohsako</HeroH1>
        <HeroP> Front-end web developer</HeroP>
        <HeroButton>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              <Link to='section2' spy={true} smooth={true} duration={1000}>
                View my work <HeroButtonArrow size='20'/>
              </Link>
            </Button>

        </HeroButton>
      </HeroStyled>
  )
}
<Link to='section4' spy={true} smooth={true} duration={1000}></Link>

export default HeroSection;
