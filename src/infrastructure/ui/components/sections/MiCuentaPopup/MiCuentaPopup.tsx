import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './MiCuentaPopup.module.scss';

interface MiCuentaPopupProps {
  show: boolean;
  onHide: () => void;
}
//cambair
const MiCuentaPopup: React.FC<MiCuentaPopupProps> = ({ show, onHide }) => {
  const [userData, setUserData] = useState({
    nombre: 'Marcelo Romero',
    usuario: '@Marcelo.Romero',
    email: 'marcelo.romero91@gmail.com',
    sobreMi: 'Incompleto',
    ubicacion: 'Argentina, Buenos Aires',
    metodoPago: 'Mastercard termina en 0089'
  });

  const handleSave = () => {
    // Aquí iría la lógica para guardar los cambios
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered className={styles.miCuentaModal}>
      <Modal.Header closeButton>
        <Modal.Title>Mi cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" value={userData.nombre} readOnly />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" value={userData.usuario} readOnly />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección de Mail</Form.Label>
            <Form.Control type="email" value={userData.email} readOnly />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sobre Mi</Form.Label>
            <Form.Control type="text" value={userData.sobreMi} readOnly />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ubicación</Form.Label>
            <Form.Control type="text" value={userData.ubicacion} readOnly />
          </Form.Group>
          <Form.Group>
            <Form.Label>Método de Pago</Form.Label>
            <Form.Control type="text" value={userData.metodoPago} readOnly />
            <Button variant="link" className={styles.editarBtn}>
              Editar
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className={styles.customButton} onClick={onHide}>
          Cerrar
        </Button>
        <Button className={styles.customButton} onClick={handleSave}>
          Aceptar y Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MiCuentaPopup;
