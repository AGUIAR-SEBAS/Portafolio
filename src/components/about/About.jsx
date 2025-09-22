import React from "react";
import "./About.css";
import Image from "../../assets/Foto_perfil.png";
import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Quien Soy </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
          
            <p className="about__description">
             Hola, soy Sebastian Aguiar. Como Ingeniero de sistemas y software, transformo desafíos de negocio en soluciones tecnológicas eficientes. Mi experiencia abarca desde el liderazgo técnico y la ingeniería de datos  hasta el desarrollo full-stack. Me motiva crear sistemas que no solo funcionan, sino que optimizan y escalan operaciones. <br /><br />
             Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
            </p>
            <ul className="about__list">
              <li><b>Frontend:</b> React.js, Next.js, Angular, TypeScript </li>
              <li><b>Backend:</b> Node.js, Python (Django), C# (.NET), PHP</li>
              <li><b>Cloud & DevOps:</b> AWS, GCP, Docker, CI/CD con GitHub Actions</li>
              <li><b>Bases de Datos:</b> PostgreSQL, SQL Server, Oracle, MySql</li>
              <li><b>Data & Automatización:</b> Power BI, Looker Studio, Make.com, Power Automate</li>
              <li><b>Otros:</b> WordPress, Git, Office 365, Power Apps, Power Query, Microsoft 365 Admin, Google WorkSpace </li>
            </ul>

            <button className="btn" onClick={downloadResume}>
              Descargar HV
            </button>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
