import React, { useState } from 'react';
import styles from '../../../custom.module.scss';
import { useRegistration } from '@/infrastructure/ui/hooks/useRegistration';
import { useRouter } from 'next/router';

const RegistrationForm: React.FC = () => {
  const router = useRouter();
// cambair1
  const { register, loading, error } = useRegistration();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = await register(formData);
    if (user) {
      router.push('/userRoute');
    }
  };

  return (
    <div className={styles.centralDiv}>
      <div className={styles.registrationForm}>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre*
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input type="text" className={styles.formControl} id="apellido" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Mail*
            </label>
            <input
              type="email"
              className={styles.formControl}
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña*
            </label>
            <input
              type="password"
              className={styles.formControl}
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="repeatPassword" className="form-label">
              Repetir contraseña*
            </label>
            <input
              type="password"
              className={styles.formControl}
              id="repeatPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="celular" className="form-label">
              Celular*
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="celular"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? 'Procesando...' : 'Crear Usuario'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
