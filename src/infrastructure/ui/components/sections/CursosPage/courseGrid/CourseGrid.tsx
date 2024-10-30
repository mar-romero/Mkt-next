import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../courseCard/CourseCard';
import ReactPaginate from 'react-paginate';
import './CourseGrid.module.scss';
import { Course } from '@/domain/entities/course.entity';

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(courses.length / PER_PAGE);

  return (
    <Container>
      <Row>
        {courses.slice(offset, offset + PER_PAGE).map((course, index) => (
          <Col key={index} sm={6} className="mb-4">
            <CourseCard title={course.name} description={course.description} classesCount={course.chapter.length} />
          </Col>
        ))}
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageLinkClassName={'pagination-link'} // updated
          previousLinkClassName={'pagination-link'} // updated
          nextLinkClassName={'pagination-link'} // updated
          breakLinkClassName={'pagination-link'} // updated
          activeLinkClassName={'pagination-link active'} // updated
        />
      </div>
    </Container>
  );
};

export default CourseGrid;
