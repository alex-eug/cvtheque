import React from 'react'
import moi from "../../../images/profil.jpg"
import './picture.scss'

export const Picture = () => {
    return (
        
            <img 
            src={moi}
            className="myFoto"
            alt="foto of me"
            />

        
    )
}
