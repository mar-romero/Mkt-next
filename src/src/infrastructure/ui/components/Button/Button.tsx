// src/infrastructure/ui/components/Button/Button.tsx
import React from 'react';
import styles from './button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    isLoading && styles.loading,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button {...props} className={buttonClasses} disabled={disabled || isLoading} data-testid="button">
      {isLoading && (
        <span className={styles.spinner} role="status" aria-hidden="true">
          <span className={styles.spinnerInner} />
        </span>
      )}
      {icon && !isLoading && <span className={styles.icon}>{icon}</span>}
      <span className={isLoading ? styles.hiddenText : ''}>{children}</span>
    </button>
  );
};
