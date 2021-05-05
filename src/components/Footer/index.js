import React from 'react';
import {FaReact, FaGithub, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
  <FooterContainer>
    <FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/' onClick={toggleHome}><FaReact /> JOHSAKO</SocialLogo>
          <WebsiteRights>JOHSAKO © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://github.com/Sasurai087' target='_blank' aria-label='Github'>
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/in/johsako/' target='_blank' aria-label='Linkedin'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterWrap>
  </FooterContainer>
    )
  }

export default Footer
