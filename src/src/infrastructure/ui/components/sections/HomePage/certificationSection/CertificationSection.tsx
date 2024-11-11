import React from 'react';
import styles from './CertificationSection.module.scss';
import Certificate from '../../../../public/images/Certificate.png';
import stylesCustom from '../../../../custom.module.scss';
import { Link } from 'react-router-dom';

const CertificationSection: React.FC = () => {
  return (
    <section className={styles.certificationSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={Certificate} alt="Certificado Digital" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Certificado Digital</h2>
            <p>
              MKT E-Learning te otorga un certificado digital que valida y reconoce tus habilidades y conocimientos ante
              el mundo. No solo aprenderás con expertos en marketing, finanzas y negocios, sino que también obtendrás la
              acreditación que te abrirá puertas en la industria. Asegura tu futuro con nuestras credenciales que te
              distinguen en el mercado laboral digital.
            </p>
            <Link to="/membresia" style={{ textDecoration: 'none' }}>
              <button className={stylesCustom.btnHome}>Quiero Inscribirme</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
