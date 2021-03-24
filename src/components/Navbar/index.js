import React, {useState, useEffect} from 'react'
import { Link } from 'react-scroll'
import './Navbar.css';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            JOHSAKO <i className='fab fa-typo3' />
          </Link>

          <div className='menu-icon' onClick={handleClick} >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='section1' spy={true} smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='section2' spy={true} smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='section3' spy={true} smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='section4' spy={true} smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button}
        </div>
      </nav>
    </>
  )
}

export default Navbar