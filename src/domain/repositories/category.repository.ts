import { Category } from '@/domain/entities/category.entity';

// src/domain/repositories/CardRepository.ts
export interface CategoryRepository {
  getCategory(): Promise<Category[]>;
}
