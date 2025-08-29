import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaEnvelope  } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/AGUIAR-SEBAS' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/sebastian-aguiar-g%C3%B3mez-b128231a7/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/sebastian.aguiargomez' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='mailto:sebas7771999@gmail.com' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaEnvelope />
            </a>
        </div>
    );
};

export default HeaderSocials;
