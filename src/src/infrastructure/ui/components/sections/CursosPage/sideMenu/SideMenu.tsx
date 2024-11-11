// src/infrastructure/ui/components/SideMenu/SideMenu.tsx
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Category } from '@/domain/entities/category.entity';
import styles from './SideMenu.module.scss';

interface SideMenuProps {
  categories: Category[];
  onCategorySelect?: (categoryId: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ categories, onCategorySelect }) => {
  return (
    <div className={styles.sideMenu}>
      <ListGroup variant="flush">
        {categories.map((category) => (
          <ListGroup.Item
            key={category.id}
            className={styles.sideMenuItem}
            onClick={() => onCategorySelect?.(category.id)}
          >
            {category.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SideMenu;
