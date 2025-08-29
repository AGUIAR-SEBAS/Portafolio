import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'
import Image4 from '../../assets/service-4.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Full-Stack Development",
        description:
            "Desarrollo aplicaciones web y móviles end-to-end. Creo desde interfaces interactivas con React hasta la lógica de servidor y bases de datos para una solución integral.",
    },
    {
        id: 2,
        image: Image2,
        title: "Cloud & DevOps",
        description:
            "Diseño y escalo infraestructura en la nube (AWS, GCP). Automatizo el ciclo de desarrollo con flujos CI/CD para garantizar entregas rápidas y seguras.",
    },
    {
        id: 3,
        image: Image3,
        title: "Database Architecture",
        description:
            "Diseño y administro bases de datos relacionales escalables (SQL Server, PostgreSQL, etc). Garantizo el máximo rendimiento, integridad y seguridad de los datos.",
    },
    {
        id: 4,
        image: Image4,
        title: "Business Intelligence & Data Visualization",
        description:
            "Convierto datos en decisiones de negocio creando dashboards e informes interactivos con herramientas líderes como Power BI y Looker Studio.",
    }
    
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Servicios</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services