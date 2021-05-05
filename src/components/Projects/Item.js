import React from 'react'
import { ItemStyled, ItemH4, ItemH5, ItemImage, ItemInfo, ItemCard, ItemLabel } from './ProjectStyles'

const Item = (props) => {
  return (
    <>
      <ItemStyled>
        <ItemCard to={props.path}>
          <ItemLabel data-category={props.label}>
            <ItemImage src={props.src} alt='Alt Text Here' />
          </ItemLabel>
          <ItemInfo>
            <ItemH4>{props.text}</ItemH4>
            <ItemH5>{props.subtext}</ItemH5>
          </ItemInfo>
        </ItemCard>
      </ItemStyled>
    </>
  )
}

export default Item
