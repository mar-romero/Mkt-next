import React from 'react';
import styles from './AboutUsSection.module.scss';
import Capa_1 from '../../../../public/images/Capa_1.png';
import Capa_2 from '../../../../public/images/Capa_2.png';
import Capa_3 from '../../../../public/images/Capa_3.png';
import Capa_4 from '../../../../public/images/Capa_4.png';


const AboutUsSection: React.FC = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className="container">
        <h2>¿Qué ofrece MKT E-Learning?</h2>
        <p>
          Nuestra plataforma está meticulosamente diseñada para ir más allá de la teoría, brindándote acceso directo al
          conocimiento práctico y a las estrategias comprobadas de un colectivo de expertos en marketing, finanzas y
          negocios, quienes han fusionado años de experiencia real para enriquecer tu aprendizaje.
        </p>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <img src={Capa_1} alt="Cursos Online"  />
            <p>Cursos 100% online para que estudies desde donde quieras</p>
          </div>
          <div className={styles.feature}>
            <img src={Capa_4} alt="Membresias"  />
            <p>Membresías con acceso ilimitado a todos los cursos</p>
          </div>
          <div className={styles.feature}>
            <img src={Capa_2} alt="Actualización"  />
            <p>Actualización constante</p>
          </div>
          <div className={styles.feature}>
            <img src={Capa_3} alt="Tendencias IA"  />
            <p>Últimas tendencias en IA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
