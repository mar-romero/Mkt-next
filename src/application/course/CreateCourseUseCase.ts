import { Course } from "@/domain/entities/course.entity";
import { CourseRepository } from "@/domain/repositories/course.repository";


export class CreateCourseUseCase {
  constructor(private courseRepository: CourseRepository) {}

  async execute(course: Omit<Course, 'id'>): Promise<Course> {
    return this.courseRepository.createCourse(course);
  }
}
