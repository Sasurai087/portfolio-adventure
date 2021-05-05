import React from 'react'
import { Link } from 'react-scroll'
import Profile from '../../images/profile.png'
import { AboutContainer, AboutH1, ValuesH1, ValuesCard, AboutStyled, ValuesWrapper, ValuesH2, ValuesP, AboutDivider, BioWrapper, BioImage, BioP, BioSpan, SkillsWrapper, SkillsH1, SkillsIcons } from './AboutStyles'
import {LightBulb} from '@styled-icons/heroicons-outline/LightBulb'
import {LightningCharge} from '@styled-icons/bootstrap/LightningCharge'
import {MobileFriendly} from '@styled-icons/material-outlined/MobileFriendly'
import {ReactLogo, JsSquare, Html5, Css3, Github, Node, Bootstrap, Python} from '@styled-icons/fa-brands'

const About = (props) => {
  return (
    <AboutStyled id='section3'>
      <AboutH1>ABOUT</AboutH1>
      <AboutContainer>
        <ValuesH1>Values</ValuesH1>
        <ValuesWrapper>
          <ValuesCard>
            <LightBulb size='100' />
            <ValuesH2>Intuitive</ValuesH2>
            <ValuesP>User-friendly experiences are my priority</ValuesP>
          </ValuesCard>

          <ValuesCard>
            <LightningCharge size='100' />
            <ValuesH2>Concise</ValuesH2>
            <ValuesP>Efficient apps with clear documentation</ValuesP>
          </ValuesCard>

          <ValuesCard>
            <MobileFriendly size='100' />
            <ValuesH2>Efficient</ValuesH2>
            <ValuesP>Applications built with mobile users in mind</ValuesP>
          </ValuesCard>
        </ValuesWrapper>

        <AboutDivider />
        
        <BioWrapper>
          <BioImage src={Profile} alt='hyper-squirrel' />
          <BioP>Hi there! I'm James, a self-taught developer who's dabbled in sales, restaurant server, and tech support. I aim to create win-win experiences with my combo of tech and comnmunication skills.
            <br /><br />
            I also love playing and teaching board games of all kinds. I recently played Cubitos, a racing game of luck and strategy involving dice drafting.<br /><br />
            Think I might be a good fit for your team?<br />
            Check out <BioSpan>my resume</BioSpan>, or 
            <Link to='section4' spy={true} smooth={true} duration={1000}>
              <BioSpan> send me a message!</BioSpan>
            </Link>
          </BioP>
          <SkillsWrapper>
            <SkillsH1>Skills</SkillsH1>
            <SkillsIcons>
              <ReactLogo size='50' />
              <JsSquare size='50' />
              <Html5 size='50' />
              <Css3 size='50' />
              <Github size='50' />
              <Node size='50' />
              <Bootstrap size='50' />
              <Python size='50' />
            </SkillsIcons>
          </SkillsWrapper>
        </BioWrapper>
      </AboutContainer>
    </AboutStyled>
  )
}

export default About