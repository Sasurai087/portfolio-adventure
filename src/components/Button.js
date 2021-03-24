import React from 'react';
import './Button.css';
import {Link} from 'react-scroll'


// check DOCS on this method later
const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? 
    buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] //defaults to btn--medium

    return (
      <Link to='/portfolio' className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        > 
          {children}
        </button>


      </Link>
    )


};