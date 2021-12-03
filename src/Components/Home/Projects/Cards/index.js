import React from 'react'
import './cards.scss'
import koza from '../../../../images/koza.png'
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

const Cards = () => {

    return (
        <div className="card__container">

            <div className="card__container--img">
                <img className="card__img" alt="foto du site koza" src={koza}></img>
            </div>
            <div className="card__container--text">
                <h3 className="card__title">Kid'oz'Anges</h3>
                <p className="card__para">Kidozanges est une plateforme permettant à des parents de trouver des activités près de chez eux pour leurs enfants. Cette application participative permet également aux parents de soumettre les activités qu'ils connaissent afin d'enrichir le site. Conception de la partie front-end de l'application.</p>
            </div>
            <nav className="icon__container">
            <a className="linkto" href="https://kidozanges.netlify.app/"><FaExternalLinkAlt /></a>
            <a className="linkto" href="https://github.com/O-clock-Valhalla/projet-03-kid-oz-anges" >  <AiFillGithub /></a>
            </nav>
            </div>


    );
}

export default Cards
