import React from 'react'
import Item from './Item'

import PrjColor from '../../images/prj-color.jpg'
import PrjForkify from '../../images/prj-forkify.jpg'
import PrjDice from '../../images/prj-dice3.jpg'
import PrjMovie from '../../images/prj-movie.jpg'
import PrjDadjokes from '../../images/prj-dadjokes.jpg'
import PrjBudgety from '../../images/prj-budgety.png'
import { ProjectsContainer, ProjectsH1, ProjectsStyled } from './ProjectStyles'

const Cards = () => {
  return (
    <ProjectsStyled id='section2'>
      <ProjectsH1>PROJECTS</ProjectsH1>
      <ProjectsContainer>
            <Item
              src={PrjColor}
              text="Color Palette Maker"
              subtext="Automagically generate, or create your own color palettes. "
              label="React, State, User Input"
              path='/'
            />
            <Item
              src={PrjForkify}
              text="Forkify"
              subtext="Search recipes and cooking directions, pulls from a recipe API."
              label="Javascript, API"
              path='/'
            />
            <Item
              src={PrjDice}
              text="Yahtzee!"
              subtext="Classic dice game using React states. Can you score higher than 124?"
              label="React, State"
              path='/'
            />
            <Item
              src={PrjMovie}
              text="Movie Battle"
              subtext="Searches IMDB for two movies, then compares and highlights their feats."
              label="Javascript, API"
              path='/'
            />
            <Item
              src={PrjDadjokes}
              text="Dad Jokes"
              subtext="Pull Dad Jokes from an API then vote for your favorites."
              label="React, User Input"
              path='/'
            />
            <Item
              src={PrjBudgety}
              text="Budgety"
              subtext="Quick and easy budgeting app with emphasis on clean UI."
              label="Javascript, User Input, Calculation"
              path='/'
            />
      </ProjectsContainer>
    </ProjectsStyled>
  )
}

export default Cards
