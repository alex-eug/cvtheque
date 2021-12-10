import React from 'react';
import './presentation.scss';

export const Presentation = () => {
    return (
        <div className="presentation__container">
           <h1 id="pres" className="presentation__title">Présentation</h1>
           <p className="presentation__para"> L’adjectif bienvenu signifie « qui arrive à point, à propos, que l’on accueille avec satisfaction ». Il s’accorde en genre et en nombre avec le nom auquel il se rapporte. On écrira donc : « une remarque bienvenue », « des travaux bienvenus ».

           Il en est de même avec le nom bienvenu, qui désigne une personne ou une chose accueillie avec plaisir : il prend la marque du féminin et du pluriel.
           
           Exemples : « Soyez les bienvenus ! » (ou les « bienvenues » si le message s’adresse exclusivement à des femmes), « Votre offre est la bienvenue », « Ces changements sont les bienvenus ».</p>
        </div>
    )
}
