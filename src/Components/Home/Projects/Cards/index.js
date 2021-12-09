import React from 'react'
import './cards.scss'
import koza from '../../../../images/koza.png'
import converter from '../../../../images/converter.png'
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

const Cards = () => {

    return (
      <div className="full__card--container">
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

            <div className="card__container--converter">

            <div className="card__container--img">
                <img className="card__img" alt="foto du site koza" src={converter}></img>
            </div>
            <div className="card__container--text">
                <h3 className="card__title--converter">Converter</h3>
                <p className="card__para">Lorsque vous voyagez, la question de la monnaie peut être importante si la devise étrangère est différente de la vôtre. Prenez l'habitude de vous renseigner sur la question du change avant de partir. Vous pourrez ainsi prévoir votre budget .</p>
            </div>
            <nav className="icon__container">
            <a className="linkto__converter" href="http://myconverter.surge.sh/"><FaExternalLinkAlt /></a>
            <a className="linkto__converter" href="https://github.com/alex-eug/convertisseur-de-devises" >  <AiFillGithub /></a>
            </nav>
            </div>

            
            </div>


    );
}

export default Cards
