import React from 'react';
import './Home.css';
import Me from '../../assets/Foto_perfil.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';


const Home = () => {
    return (
        
        <section className="home container" id='home'>
            
            <div className="intro">
                
                <img src={Me} alt="" className='home__img' width='200' />
                <h1 className="home__name">Sebastian Aguiar</h1>
                <span className="home__education">Desarrollador Full-Stack</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Contáctame</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home