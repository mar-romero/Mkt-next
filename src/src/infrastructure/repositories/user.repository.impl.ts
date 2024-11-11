// src/infrastructure/repositories/contact.repository.impl.ts
import { injectable } from 'inversify';
import { Contact } from '@/domain/entities/contact.entity';
import { AxiosAPI } from '../adapters/http/api';
import { UserRepository } from '@/domain/repositories/user.repository';
import { User } from '@/domain/entities/user.entity';

@injectable()
export class UserRepositoryImpl implements UserRepository {
  private api: AxiosAPI;

  constructor() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    this.api = new AxiosAPI({ domain: API_URL });
  }

  async getUserCount(): Promise<number> {
    const response = await this.api.get<{ count: number }>(`/users/count`);
    return response.data.count;
  }

  async sendContact(contact: Contact): Promise<void> {
    try {
      await this.api.post('/contact', contact);
    } catch (error) {
      if (error instanceof Error) {
        if (!navigator.onLine) {
          throw new Error('Error de red');
        }
        throw error;
      }
      throw new Error('Error al enviar el contacto');
    }
  }

  async register(user: User): Promise<User> {
    try {
      const { data } = await this.api.post<User>('/users/register', user);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        if (!navigator.onLine) {
          throw new Error('Error de red');
        }
        throw error;
      }
      throw new Error('Error al enviar el contacto');
    }
  }

  async checkEmailExists(email: string): Promise<boolean> {
    try {
      const { data } = await this.api.get<{ exists: boolean }>(`/users/check-email/${email}`);
      return data.exists;
    } catch (error) {
      if (error instanceof Error) {
        if (!navigator.onLine) {
          throw new Error('Error de red');
        }
        throw error;
      }
      throw new Error('Error al enviar el contacto');
    }
  }
}
