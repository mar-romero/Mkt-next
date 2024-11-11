// src/infrastructure/ui/components/Input/Input.tsx
import React from 'react';
import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, error, errorMessage, ...props }) => (
  <div className={styles.inputContainer}>
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
    <input {...props} id={id} className={`${styles.input} ${error ? styles.error : ''}`} />
    {error && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
  </div>
);
