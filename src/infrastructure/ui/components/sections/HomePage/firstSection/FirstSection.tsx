import React from 'react';
import styles from './FirstSection.module.scss';
import Vector from '../../../../public/images/Vector.png';
import Group2 from '../../../../public/images/Group2.png';
import Group1 from '../../../../public/images/Group1.png';
import Rectangle2 from '../../../../public/images/Rectangle2.jpg';
import { Link } from 'react-router-dom';


const FirstSection: React.FC = () => {
  return (
    <section className={styles.firstSection}>
      <div className={styles.container}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className={styles.firstTitle}>
              <p>MKT E-Learning</p>
              Transformá tu Visión en Acción: Aprendé, Emprendé y Liderá con Nosotros
            </h1>
            <p>
              Cursos 100% online de Marketing Digital, Comercialización, Finanzas, Emprendedurismo, Administración,
              Liderazgo y mucho más.
            </p>
            <Link to="/membresia" style={{ textDecoration: 'none' }} >
              <button className={styles.btn}>Suscribite a la plataforma más completa y económica del mercado</button>
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <img src={Rectangle2} alt="Persona estudiando" className={`img-fluid ${styles.mainImage}`} />
            <img src={Group1} alt="Sombrero" className={`${styles.sombrero} ${styles.floatingIcon}`} />
            <img src={Group2} alt="Lápiz" className={`${styles.lapiz} ${styles.floatingIcon}`} />
            <img src={Vector} alt="Mouse" className={`${styles.mouse} ${styles.floatingIcon}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
