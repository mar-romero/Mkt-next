// src/components/ContentSection/ContentSection.tsx
import React from 'react';
import styles from './ContentSection.module.scss';
import image1 from '../../../../public/images/image1.png';
import image2 from '../../../../public/images/image2.png';
import image3 from '../../../../public/images/image3.png';
import image4 from '../../../../public/images/image4.png';
import image5 from '../../../../public/images/image5.png';
import image6 from '../../../../public/images/image6.png';

const ContentSection: React.FC = () => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Transformá tu futuro con MKT E-Learning.</h2>
        <h3 className={styles.subtitle}>Convertite en un Profesional Versátil en el Mundo de los Negocios</h3>
        <p className={styles.tagline}>Acceso Ilimitado a Conocimiento Multidisciplinario y Vanguardista:</p>
        <div className="row">
          <div className="col-md-6">
            <div className={styles.featureBox}>
              <img src={image1} alt="Imagen 1" className={styles.imagePlaceholder} />
              <p>
                Sumergite en una amplia gama de cursos que abarcan desde marketing digital y finanzas hasta
                administración y ventas, todos enriquecidos con la última tecnología en inteligencia artificial.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.featureBox}>
              <img src={image2} alt="Imagen 2" className={styles.imagePlaceholder} />
              <p>
                Desarrollá habilidades prácticas para lanzar o escalar tu propia empresa con nuestra ruta de
                aprendizaje en emprendimiento.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className={styles.featureBox}>
              <img src={image3} alt="Imagen 3" className={styles.imagePlaceholder} />
              <p>
                Dominá las finanzas corporativas y personales para tomar decisiones informadas y potenciar el
                crecimiento.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.featureBox}>
              <img src={image4} alt="Imagen 4" className={styles.imagePlaceholder} />
              <p>
                Convertite en un estratega de ventas, aprendiendo técnicas avanzadas para cerrar acuerdos y expandir
                tu cartera de clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className={styles.featureBox}>
              <img src={image5} alt="Imagen 5" className={styles.imagePlaceholder} />
              <p>
                Aprendé a gestionar equipos y proyectos con eficiencia, elevando tu capacidad de liderazgo y
                administración.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.featureBox}>
              <img src={image6} alt="Imagen 6" className={styles.imagePlaceholder} />
              <p>Mejorá tu perfil profesional con certificados digitales que respaldan tu expertise y dedicación.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
