// src/application/course/getCourses.use-case.ts

import { inject, injectable } from 'inversify';
import { Course } from '@/domain/entities/course.entity';
import { CourseRepository } from '@/domain/repositories/course.repository';

@injectable()
export class GetCoursesUseCase {
  constructor(
    @inject('CourseRepository')
    private courseRepository: CourseRepository
  ) {}

  execute(): Promise<Course[]> {
    return this.courseRepository.getCourses();
  }
}
