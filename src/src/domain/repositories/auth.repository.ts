// src/domain/repositories/auth.repository.ts
import { Email } from '../value-objects/email.vo';
import { User } from '../entities/user.entity';

export interface AuthRepository {
  login(credentials: { email: Email; password: string }): Promise<LoginResult>;
  logout(): Promise<void>;
}

export interface LoginResult {
  user: User;
  token: string;
}
