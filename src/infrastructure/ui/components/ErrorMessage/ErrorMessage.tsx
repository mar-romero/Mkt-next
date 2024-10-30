// src/infrastructure/ui/components/ErrorMessage/ErrorMessage.tsx
import React from 'react';
import styles from './errorMessage.module.scss';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <p>{message}</p>
    </div>
  );
};
