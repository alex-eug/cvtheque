import React from 'react'
import './cards.scss'
import koza from '../../../../images/koza.png'


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
        </div>

    );
}

export default Cards
