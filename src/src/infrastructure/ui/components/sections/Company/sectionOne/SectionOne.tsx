import React from 'react';
import styles from './SectionOne.module.scss';

const SectionOne: React.FC = () => {
  return (
    <div className={`container ${styles.sectionContainer}`}>
      <h1 className={styles.title}>Maximizá el Potencial de tu Empresa con MKT eLearning</h1>
      <p className={styles.subTitle}>
        Transformá a tus colaboradores en líderes del mercado con nuestro programa de membresía corporativa. Diseñado
        para empresas visionarias, nuestro programa ofrece una ruta de aprendizaje integral que fusiona teoría y
        práctica en áreas clave como marketing digital, finanzas, administración, ventas y la revolucionaria
        inteligencia artificial.
      </p>
      <div className={styles.textBlock}>
        <p>
          Acceso exclusivo a más de 90 cursos, meticulosamente actualizados y dictados por renombrados especialistas de
          habla hispana.
        </p>
        <p> Desarrollo profesional continuo con materiales didácticos que marcan tendencia en la industria.</p>
        <p>
          Herramientas avanzadas para monitorear el progreso individual, asegurando un aprendizaje efectivo y medible.
        </p>
        <p>
          Flexibilidad para crear programas de aprendizaje personalizados, adaptados a las necesidades y objetivos
          específicos de cada miembro de tu equipo.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
