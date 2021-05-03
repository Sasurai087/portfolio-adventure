import React, {useState} from 'react'
import {NavbarStyled, NavbarContainer, NavbarLogo, NavbarMenu, NavbarMenuIcon, NavbarBrand, NavbarLinks} from './NavbarStyles'

const Navbar = ({toggle}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <NavbarStyled>
        <NavbarContainer>
          <NavbarBrand size='30' />
          <NavbarLogo to="section1" spy={true} smooth={true} duration={1000}>
            JOHSAKO 
          </NavbarLogo>

          <NavbarMenuIcon size='30' onClick={toggle} />

          <NavbarMenu>
              <NavbarLinks to='section1' spy={true} smooth={true} duration={1000} >
                Home
              </NavbarLinks>
              <NavbarLinks to='section2' spy={true} smooth={true} duration={1000} >
                Portfolio
              </NavbarLinks>
              <NavbarLinks to='section3' spy={true} smooth={true} duration={1000} >
                About
              </NavbarLinks>
              <NavbarLinks to='section4' spy={true} smooth={true} duration={1000} >
                Contact
              </NavbarLinks>
          </NavbarMenu>
        </NavbarContainer>
      </NavbarStyled>
    </>
  )
}

export default Navbar