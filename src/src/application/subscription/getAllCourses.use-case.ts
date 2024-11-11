// src/application/course/getInitialData.use-case.ts
import { Course } from '@/domain/entities/course.entity';
import { Category } from '@/domain/entities/category.entity';
import { CourseRepository } from '@/domain/repositories/course.repository';
import { CategoryRepository } from '@/domain/repositories/category.repository';
import { inject, injectable } from 'inversify';

@injectable()
export class GetInitialDataUseCase {
  constructor(
    @inject('CourseRepository')
    @inject('CategoryRepository')
    private courseRepository: CourseRepository,
    private categoryRepository: CategoryRepository
  ) {}

  async execute(): Promise<{ courses: Course[]; categories: Category[] }> {
    const [courses, categories] = await Promise.all([
      this.courseRepository.getCourses(),
      this.categoryRepository.getCategory()
    ]);

    return { courses, categories };
  }
}
