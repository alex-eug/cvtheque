import React from 'react'
import Cards from './Cards'
import './projects.scss'


export const Projects = () => {
    return (
        <div className="projects__container">
            <h1 id="pro" className="projects__title">Mes projets</h1>
            <Cards />
        </div>
    )
}



