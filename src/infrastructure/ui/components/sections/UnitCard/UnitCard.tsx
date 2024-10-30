import React from 'react';
import styles from './UnitCard.module.scss';

interface UnitCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isSelected: boolean;
  prevVideoUrl?: string;
  nextVideoUrl?: string;
}

const UnitCard: React.FC<UnitCardProps> = ({
  title,
  description,
  imageUrl,
  isSelected,
  prevVideoUrl,
  nextVideoUrl
}) => {
  return (
    <div className={`card ${styles.unitCard}`}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className={`card-body ${styles.cardBody}`}>
        <h5 className={`card-title`}>{title}</h5>
        {isSelected && <p className={styles.selected}>{description}</p>}
      </div>
    </div>
  );
};

export default UnitCard;
