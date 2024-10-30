// src/application/course/getCourses.use-case.ts
import { inject, injectable } from 'inversify';
import { Course } from '@/domain/entities/course.entity';
import { CourseRepository } from '@/domain/repositories/course.repository';

@injectable()
export class SearchCoursesUseCase {
  constructor(
    @inject('CourseRepository')
    private courseRepository: CourseRepository
  ) {}

  execute(query: string): Promise<Course[]> {
    return this.courseRepository.searchCourses(query);
  }
}
