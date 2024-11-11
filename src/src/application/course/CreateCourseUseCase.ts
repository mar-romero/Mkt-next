import { Course } from "@/domain/entities/course.entity";
import { CourseRepository } from "@/domain/repositories/course.repository";
import { inject, injectable } from 'inversify';

@injectable()
export class CreateCourseUseCase {
  constructor(
    @inject('CourseRepository')
    private courseRepository: CourseRepository
  ) {}

  async execute(course: Omit<Course, 'id'>): Promise<Course> {
    return this.courseRepository.createCourse(course);
  }
}
