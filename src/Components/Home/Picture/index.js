import React from 'react'
import moi from "../../../images/pp1.jpg"
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
