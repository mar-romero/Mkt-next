// src/infrastructure/repositories/ApiCardRepository.ts
import { Card } from '@/application/course/getCourseforcard.use-case';
import { AxiosAPI } from '../adapters/http/api';
import { injectable } from 'inversify';
import { Course } from '@/domain/entities/course.entity';
import { CourseRepository } from '@/domain/repositories/course.repository';

@injectable()
export class CourseRepositoryImpl implements CourseRepository {
  private api: AxiosAPI;

  constructor() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/backend';
    this.api = new AxiosAPI({ domain: API_URL });
  }


  async getCourseById(id: string): Promise<Course | null> {
    const response = await this.api.get<Course>(`/courses/${id}`);
    return response.data;
  }

  async createCourse(course: Omit<Course, 'id'>): Promise<Course> {
    const response = await this.api.post<Course>(`/courses`, course);
    return response.data;
  }

  async updateCourse(id: string, course: Partial<Course>): Promise<Course> {
    const response = await this.api.put<Course>(`/courses/${id}`, course);
    return response.data;
  }
  async getCards(): Promise<Card[]> {
    try {
      const { data } = await this.api.get<Card[]>('/cards');
      return data;
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
  async getCourses(): Promise<Course[]> {
    try {
      const { data } = await this.api.get<Course[]>(`/courses`);
      return data;
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

  async searchCourses(query: string): Promise<Course[]> {
    try {
      const { data } = await this.api.get<Course[]>(`/courses/search`, {
        params: { query }
      });
      return data;
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
