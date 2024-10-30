// src/application/useCases/UpdateCourseUseCase.ts
import { CourseRepository } from '../../domain/repositories/CourseRepository';
import { Course } from '../../domain/entities/Course';

export class UpdateCourseUseCase {
  constructor(private courseRepository: CourseRepository) {}

  async execute(id: string, course: Partial<Course>): Promise<Course> {
    return this.courseRepository.updateCourse(id, course);
  }
}
