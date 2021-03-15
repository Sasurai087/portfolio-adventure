import React from 'react'
import CardItem from './CardItem'
import './Card.css'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="../images/prj-color.jpg"
              text="Color Palette Maker"
              subtext="Automagically generate and save your own color palettes! Allows manual creation, tone adjustment, and rgba-hex conversion."
              label="React, State, User Input"
              path='/'
            />
            <CardItem
              src="../images/prj-forkify.jpg"
              text="Forkify"
              subtext="Search up recipes and cooking directions with style! Pulls data from recipe API."
              label="Javascript, API"
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="../images/prj-dice3.jpg"
              text="Yahtzee!"
              subtext="Classic dice game recreated using state. Can you score higher than 124?"
              label="React, State"
              path='/'
            />
            <CardItem
              src="../images/prj-movie.jpg"
              text="Movie Battle"
              subtext="Searches IMDB for two movies, then compares and highlights their feats!"
              label="Javascript, API"
              path='/'
            />
            <CardItem
              src="../images/prj-dadjokes.jpg"
              text="Dad Jokes"
              subtext="Pulls from a Dad Jokes API then saves your favorites via voting system"
              label="React, User Input"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
