import React from 'react';
import './competence.scss'

export const Competences = () => {
    return (
        <div classNameName="competence">
    <h1 id="comp" className="skill__title">Mes compétences</h1>
        <div className="skills__container">
          
        
                <div className="box">
                <h3 className="title">HTML</h3>
                <div className="bar" id="html"></div>
                </div>
                <div className="box">
                <h3 className="title">CSS</h3>
                <div className="bar" id="css"></div>
                </div>
                <div className="box">
                <h3 className="title">Javascript</h3>
                <div className="bar" id="js"></div>
                </div>
                <div className="box">
                <h3 className="title">React</h3>
                <div className="bar" id="react"></div>
                </div>
                <div className="box">
                <h3 className="title">Node.js</h3>
                <div className="bar" id="nodeJs"></div>
                </div>
                <div class="box">
                <h3 class="title">SQL</h3>
                <div class="bar" id="sql"></div>
                </div>
            
        </div>
        </div>
    )
}
