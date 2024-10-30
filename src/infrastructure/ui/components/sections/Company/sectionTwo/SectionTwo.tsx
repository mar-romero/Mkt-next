// src/infrastructure/ui/components/sections/Company/sectionTwo/SectionTwo.tsx
import React, { useState } from 'react';
import styles from './SectionTwo.module.scss';
import { useContact } from '@/infrastructure/ui/hooks/useContact';
import { Contact } from '@/domain/entities/contact.entity';

const SectionTwo: React.FC = () => {
  const [formValues, setFormValues] = useState<Contact>({
    id:'',
    company: '',
    phone: '',
    email: '',
    query: ''
  });

  const { loading, error, success, sendContact } = useContact();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendContact(formValues);
    if (success) {
      setFormValues({
        id: '',
        company: '',
        phone: '',
        email: '',
        query: ''
      });
    }
  };

  return (
    <div className={styles.sectionContainer}>
      <p className={styles.subTitle}>
        Invertí en el crecimiento de tu empresa con MKT eLearning, donde cada curso es un paso adelante hacia la
        excelencia empresarial.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className={styles.formControl}
            id="company"
            placeholder="Empresa:"
            value={formValues.company}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className={styles.formControl}
            id="phone"
            placeholder="Teléfono:"
            value={formValues.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className={styles.formControl}
            id="email"
            placeholder="Correo electrónico:"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className={styles.formQuery}
            id="query"
            placeholder="Consulta:"
            value={formValues.query}
            onChange={handleInputChange}
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>Mensaje enviado correctamente</div>}
        <button type="submit" className={`btn ${styles.submitButton}`} disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Consulta'}
        </button>
      </form>
    </div>
  );
};

export default SectionTwo;
