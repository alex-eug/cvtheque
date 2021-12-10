import React from 'react'
import './contact.scss'
import { AiFillGithub , AiOutlineLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import { RiFacebookCircleFill} from "react-icons/ri";
import cv from '../../../images/cv.pdf'

export const Contact = () => {
    return (
      
        <div id='contact' className='card__contact'>
        <h1 className="contact__title">Contact</h1>
        <div className='link__social'>
        <a className="linkto__converter--end" href="https://github.com/alex-eug/convertisseur-de-devises" >  <AiFillGithub /></a>
        <a className="linkto__converter--end" href="https://www.linkedin.com/feed/" >  <AiOutlineLinkedin /></a>
        <a className="linkto__converter--end" href="#" >  <RiFacebookCircleFill /></a>
        <a className="linkto__converter--end" href="https://twitter.com/home" >  <AiFillTwitterSquare /></a>
        </div>
        <div>
        <a href="mailto:alexandre.eugene31@gmail.com" class="linkto__converter--end">Contactez-moi !</a>
        </div>
        
        <div className='to__cv'>
            <a href={cv} className='linkto__converter--end--mail'>Télécharger mon cv</a>
        </div>

        </div>
    )
}
