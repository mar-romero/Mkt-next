import React from 'react';
import styles from './HeroSection.module.scss';
import Rectangle53 from '../../../../public/images/Rectangle53.png';

const HeroSection: React.FC = () => {
  return (
    <div className={`container-fluid ${styles.heroSection}`}>
      <div className="row">
        <div className={`col-lg-7 col-md-6 ${styles.textSection}`}>
          <h2 className={styles.title}>Sobre MKT E-Learning</h2>
          <p className={styles.description}>
            En MKT eLearning, nos impulsa la convicción de que una educación de calidad en negocios debe ser accesible y
            avanzada, capaz de equipar a los profesionales con las herramientas necesarias para triunfar en un mercado
            en constante evolución. Nuestra esencia se centra en la fusión de conocimientos prácticos con tecnologías de
            punta, ofreciendo cursos que abarcan desde marketing digital hasta administración y ventas, todos liderados
            por expertos con una profunda comprensión teórica y experiencia real en la industria.
          </p>
        </div>
        <img src={Rectangle53} alt="Rectangle 53" className={styles.imagePlaceholder} />
          <div className={styles.imagePlaceholder}>{/* Aquí va la imagen que subirás */}</div>
      </div>
    </div>
  );
};

export default HeroSection;
