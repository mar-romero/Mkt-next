// src/infrastructure/repositories/auth.repository.impl.ts
import { injectable } from 'inversify';
import { AxiosAPI } from '../adapters/http/api';
import { AuthRepository, LoginResult } from '@/domain/repositories/auth.repository';
import { Email } from '@/domain/value-objects/email.vo';

@injectable()
export class AuthRepositoryImpl implements AuthRepository {
  private api: AxiosAPI;

  constructor() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/backend';
    this.api = new AxiosAPI({ domain: API_URL });
  }

  async login(credentials: { email: Email; password: string }): Promise<LoginResult> {
    try {
      const response = await this.api.post<LoginResult>('/login', {
        email: credentials.email.getValue(),
        password: credentials.password
      });

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

  async logout(): Promise<void> {
    await this.api.post<void>('/logout');
  }
}
