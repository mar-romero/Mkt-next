import React from 'react';
import styles from './login.module.css';
import { Input } from '../../Input/Input';
import { useLoginForm } from '@/infrastructure/ui/hooks/useLoginForm';
import { Button } from '../../Button/Button';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';

export default function Login() {
  const { state, handleSubmit, setEmail, setPassword, togglePasswordVisibility, setFieldTouched } = useLoginForm();
 //ver useauth
  return (
    <div className={styles.centralDivLogin}>
      <div className={styles.registrationForm}>
        {state.error && <ErrorMessage message={state.error} />}
        <form onSubmit={handleSubmit} noValidate>
          <Input
            type="email"
            label="Email*"
            id="email"
            value={state.email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setFieldTouched('email')}
            disabled={state.isLoading}
            error={state.touchedFields.has('email') && !state.email}
            errorMessage="El email es requerido"
            className={styles.formControl}
          />
          <div className={styles.passwordContainer}>
            <Input
              type={state.showPassword ? 'text' : 'password'}
              label="Contraseña"
              id="password"
              value={state.password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setFieldTouched('password')}
              disabled={state.isLoading}
              error={state.touchedFields.has('password') && state.password.length < 6}
              errorMessage="La contraseña es requerida"
              className={styles.formControl}
            />
            <Button
              type="button"
              onClick={togglePasswordVisibility}
              disabled={state.isLoading}
              className={styles.showHideButton}
              aria-label={state.showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {state.showPassword ? 'Ocultar' : 'Mostrar'}
            </Button>
          </div>
          <Button type="submit" isLoading={state.isLoading} disabled={state.isLoading} className={styles.btn}>
            {state.isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Button>
        </form>
      </div>
    </div>
  );
}
