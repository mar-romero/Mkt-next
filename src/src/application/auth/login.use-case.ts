// src/application/auth/login.use-case.ts
import { inject, injectable } from 'inversify';
import { AuthRepository } from '@/domain/repositories/auth.repository';
import { Email } from '@/domain/value-objects/email.vo';
import { LoginDTO, LoginResult } from './dto/login.dto';
import { LoginError } from './errors/login.error';
import { TokenStorageService } from '@/domain/services/token-storage.service';

@injectable()
export class LoginUseCase {
  constructor(
    @inject('AuthRepository')
    private readonly authRepository: AuthRepository
  ) {}

  async execute(loginDTO: LoginDTO): Promise<LoginResult> {
    try {
      this.validateInput(loginDTO);

      const email = new Email(loginDTO.email);
      const userResponse = await this.authRepository.login({ email: email, password: loginDTO.password });

      if (!userResponse) {
        throw new LoginError('LOGIN_FAILED', 'No se obtuvo token');
      }

      TokenStorageService.setToken(userResponse.token);

      return {
        success: true,
        user: {
          id: userResponse.user.id,
          email: userResponse.user.email,
          token: userResponse.token
        }
      };
    } catch (error) {
      if (error instanceof LoginError) {
        throw error;
      }
      throw new LoginError(
        'LOGIN_FAILED',
        'Error en el inicio de sesión',
        error instanceof Error ? error.message : undefined
      );
    }
  }

  private validateInput(loginDTO: LoginDTO): void {
    if (!loginDTO.email) {
      throw new LoginError('VALIDATION_ERROR', 'El email es requerido', 'email');
    }
    if (!loginDTO.password) {
      throw new LoginError('VALIDATION_ERROR', 'La contraseña es requerida', 'password');
    }
    if (loginDTO.password.length < 6) {
      throw new LoginError('VALIDATION_ERROR', 'La contraseña debe tener al menos 6 caracteres', 'password');
    }
  }
}
