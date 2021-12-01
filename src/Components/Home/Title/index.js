import React from 'react'
import './title.scss'

export const Title = () => {
    
    const handleAnimationTitleEnd = () => {
        const titleContainer = document.querySelector('.title__container')
        titleContainer.className += "animation-container-end";
        const paraTitle = document.querySelector('.title__name ')
        paraTitle.className += "animation-title-end";
        const paraPara = document.querySelector('.title__para ')
        paraPara.className += "animation-paraTitle-end";
        
    }
    const specialityName = "{ Développeur full-stack : javascript }"
    return (

        <div 
        onAnimationEnd={handleAnimationTitleEnd}
        className="title__container ">
            <h1 className= "title__name ">[ Alexandre Eugene ]</h1>
            <p className= "title__para ">{ specialityName }</p>
        </div>
    )
}
