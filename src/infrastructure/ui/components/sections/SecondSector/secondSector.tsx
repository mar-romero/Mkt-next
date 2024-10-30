// src/ui/components/SecondSector/secondSector.tsx
import React from 'react';
import styles from './SecondSector.module.scss';
import Vector from '../../../public/images/Vector.png';
import Group2 from '../../../public/images/Group2.png';
import Group1 from '../../../public/images/Group1.png';
import Rectangle2 from '../../../public/images/Rectangle40.png';

interface SecondSectorProps {
  titulo: string;
}

const SecondSector: React.FC<SecondSectorProps> = ({ titulo }) => {
  return (
    <section className={styles.secondSector}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.firstTitle}>{titulo}</h1>
          <div className={styles.imageWrapper}>
            <img src={Rectangle2} alt="Persona estudiando" className={styles.mainImage} />
            <img src={Group1} alt="Sombrero" className={`${styles.floatingIcon} ${styles.sombrero}`} />
            <img src={Group2} alt="Lápiz" className={`${styles.floatingIcon} ${styles.lapiz}`} />
            <img src={Vector} alt="Mouse" className={`${styles.floatingIcon} ${styles.mouse}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSector;
