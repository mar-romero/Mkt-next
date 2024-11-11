// src/infrastructure/ui/components/CoursePage/CoursePage.tsx
'use client';

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useCourses } from '@/infrastructure/ui/hooks/useCourses';
import styles from './CoursePage.module.scss';
import SideMenu from '../sideMenu/SideMenu';
import SearchBar from '../searchBar/SearchBar';
import CourseGrid from '../courseGrid/CourseGrid';

const CoursePage: React.FC = () => {
  const { courses, categories, loading, error, searchCourses } = useCourses();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Row className={styles.divCentral}>
      <Col md={3}>
        <SideMenu categories={categories} />
      </Col>
      <Col md={9}>
        <SearchBar onSearch={searchCourses} />
        <CourseGrid courses={courses} />
      </Col>
    </Row>
  );
};

export default CoursePage;
