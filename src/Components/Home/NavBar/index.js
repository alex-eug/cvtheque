import React from 'react'
import { NavLink } from 'react-router-dom'
import './navBar.scss'
import { useEffect } from 'react'

export const NavBar = () => {

    
    const handleAnimationEnd = () => {
        const card = document.querySelector('.nav__container')
        card.className += "animation-end";
        const para = document.querySelectorAll('.nav__para')
        para.forEach((element)=>element.className += "animation-para-end");
    }
    
    return (
        <nav
            className="nav__container "
            onAnimationEnd={handleAnimationEnd}
        >
            <a href ="#pres " className="nav__para ">Présentation </a>
            <a href="#comp" className="nav__para ">Compétences </a>
            <a href="#pro" className="nav__para ">Projets </a>
            
        </nav>
    )
}

