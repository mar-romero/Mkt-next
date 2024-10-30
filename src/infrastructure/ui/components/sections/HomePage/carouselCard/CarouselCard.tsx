import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import styles from './CarouselCard.module.scss';
import stylesCustom from '../../../../custom.module.scss';
import { Link } from 'react-router-dom';
import Rectangle55 from '../../../../public/images/Rectangle2.jpg';

interface CarouselCardProps {
  cards: { id: string; title: string; content: string }[];
}

const CarouselCard: React.FC<CarouselCardProps > = ({ cards }) => {
  const chunk = (arr: { id: string; title: string; content: string }[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));

  const cardGroups = chunk(cards, 3);

  if (cards.length === 0) {
    return <div>No hay cursos disponibles</div>;
  }

  return (
    <section className={styles.CarouselCard}>
      <div className={styles.carousel}>
        <Carousel interval={null}>
          {cardGroups.map((group, groupIndex) => (
            <Carousel.Item className={styles.item} key={groupIndex}>
              <div className="row">
                {group.map((card, cardIndex) => (
                  <div className="col-md-3 mb-3" key={cardIndex}>
                    <Card className={styles.carouselIn}>
                      <Card.Body>
                        <Card.Img src={Rectangle55} className={styles.carouselItem} />
                        <div className={styles.carouselTextIn}>
                          <Card.Title className={styles.cardTitle}>{card.title}</Card.Title>
                          <Card.Text>{card.content}</Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <Link to="/cursos" style={{ textDecoration: 'none' }}>
          <Button variant="primary" className={`${stylesCustom.btnHome} ${stylesCustom.btnHomeCerti}`}>
            Ver todos los cursos
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CarouselCard;
