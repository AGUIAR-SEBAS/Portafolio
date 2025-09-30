import React from 'react'
import { RiFireLine, RiFundsLine, RiCodepenLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />

                <div>
                    <h3 className="about__title">+5</h3>
                    <span className="about__subtitle">Años de experiencia</span>
                </div>
            </div>

            <div className="about__box">
                <RiFundsLine className='about__icon' />

                <div>
                    <h3 className="about__title">+30%</h3>
                    <span className="about__subtitle">Optimización de Procesos   </span>
                </div>
            </div>

            <div className="about__box">
                <RiCodepenLine className='about__icon' />

                <div>
                    <h3 className="about__title">+5</h3>
                    <span className="about__subtitle">Proyectos Lanzados</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className='about__icon' />

                <div>
                    <h3 className="about__title">100%</h3>
                    <span className="about__subtitle">Calidad del código</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox