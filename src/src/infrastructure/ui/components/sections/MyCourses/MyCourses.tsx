import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import styles from './MyCourses.module.scss';
import Rectangle55 from '../../../public/images/Rectangle2.jpg';
import Rectangle52 from '../../../public/images/Rectangle10.png';

interface Curso {
  id: number;
  nombre: string;
  progreso?: number;
}
//cambiar
const MisCursos: React.FC = () => {
const cursosEnProgreso: Curso[] = [
  { id: 1, nombre: 'Curso de JavaScript', progreso: 75 },
  { id: 2, nombre: 'Curso de React', progreso: 50 },
  { id: 3, nombre: 'Curso de Node.js', progreso: 25 },
  { id: 4, nombre: 'Curso de CSS', progreso: 10 }
];

const cursosCompletados: Curso[] = [
  { id: 5, nombre: 'Curso de HTML' },
  { id: 6, nombre: 'Curso de Python' }
];

  return (
    <Container fluid className={styles.misCursos}>
      <h2>Mis Cursos en Progreso</h2>
      <Row>
        {cursosEnProgreso.map((curso) => (
          <Col key={curso.id} xs={12} md={6} lg={3}>
            <Card className={styles.cursoCard}>
              <Card.Body>
                <Card.Img src={Rectangle55} className={styles.carouselItem} />
                <Card.Title>{curso.nombre}</Card.Title>
                <ProgressBar now={curso.progreso} label={`${curso.progreso}%`} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2>Mis Cursos Completados</h2>
      <Row>
        {cursosCompletados.map((curso) => (
          <Col key={curso.id} xs={12} md={6} lg={3}>
            <Card className={`${styles.cursoCard} ${styles.completado}`}>
              <Card.Body>
                <Card.Img src={Rectangle52} className={styles.carouselItem} />
                <Card.Title>{curso.nombre}</Card.Title>
                <ProgressBar now={100} label="Completado" />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MisCursos;
