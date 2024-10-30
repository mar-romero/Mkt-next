import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SocialIcon from '../socialIcon/SocialIcon'; // Importamos el componente SocialIcon
import styles from './SocialSection.module.scss';
import Insta from '../../../../public/images/Insta.png';
import Face from '../../../../public/images/Face.png';
import What from '../../../../public/images/What.png';

const SocialSection: React.FC = () => {
  return (
    <section className={styles.socialSection}>
      <div className="container">
        <h2 className={`text-center ${styles.socialSection}`}>Seguinos en nuestras redes!</h2>
        <Row className={`justify-content-center align-items-center ${styles.socialIconsContainer}`}>
          <Col md={4} className="text-center">
            <SocialIcon url="enlace_a_red_social_1" imageSrc={Insta} altText="Instagram" />
          </Col>
          <Col md={4} className="text-center">
            <SocialIcon url="enlace_a_red_social_2" imageSrc={Face} altText="Facebook" />
          </Col>
          <Col md={4} className="text-center">
            <SocialIcon url="enlace_a_red_social_3" imageSrc={What} altText="WhatsApp" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SocialSection;
