import React from 'react'
import { Title } from './Title';
import { NavBar } from './NavBar';
import './home.scss'
import { Picture } from './Picture';
import { Welcome } from './Welcome';
import { Presentation } from './Presentation';
import { Competences } from './Competences';
import { Projects } from './Projects';

export const Home = () => {
    return (
        <div className="home__container">
            <Title />
            <div className="home__down">
                <NavBar />
                <Welcome />
                <Picture />

            </div>
            <div className="home__container__presentation">
                <Presentation />
                <Competences />
                <Projects />
            </div>
        </div>
    )
}
