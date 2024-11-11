// src/components/WelcomeModal/WelcomeModal.tsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './WelcomeModal.module.scss';
import Rectangle83 from '../../../public/images/Rectangle83.png';

interface WelcomeModalProps {
  show: boolean;
  handleClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName={styles.customModal}
      contentClassName={styles.customModalContent} // Agrega esta línea
    >
      <img src={Rectangle83} alt="Welcome" className={styles.modalImage} />
      <Button variant="primary" onClick={handleClose} className={styles.modalButton}>
        Ver más
      </Button>
    </Modal>
  );
};

export default WelcomeModal;