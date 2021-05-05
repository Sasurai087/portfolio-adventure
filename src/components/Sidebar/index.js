import React from 'react'
import {SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SidebarMenu} from './SidebarStyles'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon size='40'/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='section1' spy={true} smooth={true} duration={1000} onClick={toggle} >Home</SidebarLink>
          <SidebarLink to='section2' spy={true} smooth={true} duration={1000} onClick={toggle} >Projects</SidebarLink>
          <SidebarLink to='section3' spy={true} smooth={true} duration={1000} onClick={toggle} >About</SidebarLink>
          <SidebarLink to='section4' spy={true} smooth={true} duration={1000} onClick={toggle} >Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
