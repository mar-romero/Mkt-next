import React from 'react';
import styles from './AboutMemberships.module.scss';
import Rectangle54 from '../../../../public/images/Rectangle54.png';
import Rectangle55 from '../../../../public/images/Rectangle55.png';

const AboutMemberships: React.FC = () => {
  return (
    <div className={`container ${styles.aboutMemberships}`}>
      <p className={styles.intro}>
        Bajo la dirección visionaria de Victoria Sangiovani Sandoval y Claudio Franco Cavezzali, MKT Elearning se
        compromete a mantenerse a la vanguardia de la innovación educativa, ofreciendo programas que no solo enseñan,
        sino que también inspiran y transforman. Valoramos la integridad, la excelencia y el empoderamiento, y nos
        esforzamos por reflejar estos principios en cada curso, cada lección y cada interacción, asegurando que nuestros
        estudiantes estén preparados para convertirse en los líderes y pioneros del mañana.
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className={styles.profile}>
            <img src={Rectangle54} alt="Rectangle 54" className={styles.imagePlaceholder} />
            <div className={styles.text}>
              <p>
                <strong>María Victoria Sangiovani Sandoval</strong>
              </p>
              <p>Lic. en Administración y Gestión Empresarial - UNSAM</p>
              <p>Posgrado en Marketing Estratégico - UNSAM</p>
              <p>Posgrado en Gestión de Proyectos - UTN</p>
              <p>Posgrado en Marketing B2B - UNSAM</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.profile}>
            <img src={Rectangle55} alt="Rectangle 55" className={styles.imagePlaceholder} />
            <div className={styles.text}>
              <p>
                {' '}
                <strong>Claudio Franco Cavezzali</strong>
              </p>

              <p>Lic. en Comercialización y Marketing - Universidad Siglo XXI</p>
              <p>Posgrado en Marketing Estratégico - UNSAM</p>
              <p>Posgrado en Marketing B2B - UNSAM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMemberships;
