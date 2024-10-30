// src/application/course/getCourses.use-case.ts

import { Course } from '../entities/course.entity';
import { Card } from '@/application/course/getCourseforcard.use-case';

// src/domain/repositories/CardRepository.ts
export interface CourseRepository {
  getCards(): Promise<Card[]>;
  getCourses(): Promise<Course[]>;
  searchCourses(query: string): Promise<Course[]>;
  getCourses(): Promise<Course[]>;
  getCourseById(id: string): Promise<Course | null>;
  createCourse(course: Omit<Course, 'id'>): Promise<Course>;
  updateCourse(id: string, course: Partial<Course>): Promise<Course>;
}
