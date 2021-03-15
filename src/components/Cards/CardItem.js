import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = (props) => {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img className='cards__item__img' src={props.src} alt='Alt Text Here' />
          </figure>
          <div className='cards__item__info'>
            <h4 className='cards__item__text'>{props.text}</h4>
            <h5 className='cards__item__subtext'>{props.subtext}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
