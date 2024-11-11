// src/application/useCases/UpdateCourseUseCase.ts

import { Course } from '@/domain/entities/course.entity';
import { CourseRepository } from '@/domain/repositories/course.repository';
import { inject, injectable } from 'inversify';

@injectable()
export class UpdateCourseUseCase {
  constructor(
    @inject('CourseRepository')
    private courseRepository: CourseRepository
  ) {}

  async execute(id: string, course: Partial<Course>): Promise<Course> {
    return this.courseRepository.updateCourse(id, course);
  }
}
