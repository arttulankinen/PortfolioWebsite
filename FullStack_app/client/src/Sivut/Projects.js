import React from 'react'
import ristinolla from '../images/ristinollla.PNG'

function Projects() {
  return (
    <div id="Projectspage">
      <h1 id='header'>PROJECTS</h1>
    <div id='ProjectCard1'>
        <div id='left-content'>
          <p>Ristinolla peli, tehty reactilla!<br/>
          <br/>
          Klikkaa kuvaa ja pelaa</p>
        </div>
        <div id='right-content'>
        <a href='https://arttulankinen.github.io/ristinolla/'  target="_blank" rel="noopener noreferrer">
        <img id='right-kuva' src={ristinolla} alt="ristnolla"/>
        </a>
        </div>
    </div>
</div>
  )
}

export {Projects}