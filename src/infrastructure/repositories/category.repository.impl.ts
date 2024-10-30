// src/infrastructure/repositories/auth.repository.impl.ts
import { injectable } from 'inversify';
import { AxiosAPI } from '../adapters/http/api';
import { Category } from '@/domain/entities/category.entity';
import { CategoryRepository } from '@/domain/repositories/category.repository';

@injectable()
export class CategoryRepositoryImpl implements CategoryRepository {
  private api: AxiosAPI;

  constructor() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/backend';
    this.api = new AxiosAPI({ domain: API_URL });
  }

  async getCategory(): Promise<Category[]> {
    try {
      const response = await this.api.get<Category[]>('/category')

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        if (!navigator.onLine) {
          throw new Error('network error');
        }
        throw error;
      }
      throw new Error('network error');
    }
  }


}
