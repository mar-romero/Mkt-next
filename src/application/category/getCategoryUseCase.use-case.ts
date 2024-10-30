// src/application/course/getCourses.use-case.ts
import { Category } from '@/domain/entities/category.entity';
import { CategoryRepository } from '@/domain/repositories/category.repository';
import { inject, injectable } from 'inversify';

@injectable()
export class CategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: CategoryRepository
  ) {}

  execute(): Promise<Category[]> {
    return this.categoryRepository.getCategory();
  }
}
