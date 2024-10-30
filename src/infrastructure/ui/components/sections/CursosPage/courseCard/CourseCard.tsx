import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './CourseCard.module.scss';
import Rectangle55 from '../../../../public/images/Rectangle10.png';

interface CourseCardProps {
  title: string;
  description: string;
  classesCount: number;

}
//cambiar
const CourseCard: React.FC<CourseCardProps> = ({ title, description, classesCount }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate(`${title}`);
    } else {
      navigate('/membresia');
    }
  };

  return (
    <Card className={styles.courseCard}>
      <Card.Img variant="top" src={Rectangle55} className={styles.courseCardImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.courseCardText}>
          <p>Detalles: {description}</p> <br />
          <p>Modulos: {classesCount}</p>
        </Card.Text>
        <Button className={styles.btn} onClick={handleButtonClick}>
          {isLoggedIn ? 'Ver Curso' : 'QUIERO MI MEMBRESÍA'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
