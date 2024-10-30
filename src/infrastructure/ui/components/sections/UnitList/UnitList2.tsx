
// src/infrastructure/ui/components/UnitList.tsx
import React, { useState } from 'react';

import styles from './UnitList.module.scss';
import UnitCard from '../UnitCard/UnitCard';

interface Unit {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  prevVideoUrl: string;
  nextVideoUrl: string;
}

const unitsData: Unit[] = [
  {
    id: 1,
    title: 'Ejemplo de modelo de agencia exitoso',
    description: `En el mundo empresarial, los ejemplos de modelos de agencia exitosos pueden`,
    imageUrl: 'url-de-imagen',
    prevVideoUrl: 'url-de-video',
    nextVideoUrl: 'url-de-video'
  },
  {
    id: 2,
    title: `Cómo crear una propuesta de valor única para tu agencia`,
    description: `En el mundo empresarial, los ejemplos de modelos de agencia exitosos pueden`,
    imageUrl: 'url-de-imagen',
    prevVideoUrl: 'url-de-video',
    nextVideoUrl: 'url-de-video'
  },
  {
    id: 3,
    title: `Ejemplo de modelo de agencia exitoso`,
    description: `En el mundo empresarial, los ejemplos de modelos de agencia exitosos pueden`,
    imageUrl: 'url-de-imagen',
    prevVideoUrl: 'url-de-video',
    nextVideoUrl: 'url-de-video'
  }
];

const UnitList2: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);

  const handleUnitClick = (id: number) => {
    setSelectedUnitId(id === selectedUnitId ? null : id);
    setSelectedUnitId(id === selectedUnitId ? null : id);
    setSelectedUnitId(id === selectedUnitId ? null : id);
  };


  return (
    <div className={styles.unitList}>
      {unitsData.map((unit) => (
        <div key={unit.id} onClick={() => handleUnitClick(unit.id)}>
          <UnitCard
            title={unit.title}
            description={unit.description}
            imageUrl={unit.imageUrl}
            isSelected={unit.id === selectedUnitId}
            prevVideoUrl={unit.id === selectedUnitId ? unit.prevVideoUrl : undefined}
            nextVideoUrl={unit.id === selectedUnitId ? unit.nextVideoUrl : undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default UnitList2;
