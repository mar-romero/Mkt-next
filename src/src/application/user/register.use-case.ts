// src/application/user/register.use-case.ts
import { inject, injectable } from 'inversify';
import { User, UserRoles } from '@/domain/entities/user.entity';
import { UserRepository } from '@/domain/repositories/user.repository';
import { Password } from '@/domain/value-objects/password.vo';
import { Result } from '@/domain/value-objects/result.vo';

@injectable()
export class RegisterUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {}

  async execute(userData: {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
  }): Promise<Result<User>> {
    if (userData.password !== userData.confirmPassword) {
      return Result.fail('Las contraseñas no coinciden');
    }

    const passwordResult = Password.create(userData.password);
    if (!passwordResult) {
      return Result.fail(passwordResult);
    }

    const emailExists = await this.userRepository.checkEmailExists(userData.email);
    if (emailExists) {
      return Result.fail('El email ya está registrado');
    }
    // cambair1
    const user: User = {
      id: '',
      role: UserRoles.USER,
      name: userData.name,
      lastName: userData.lastName,
      firstName: userData.lastName,
      email: userData.email,
      userName: userData.email,
      password: passwordResult.getValue().getValue(),
      phone: userData.phone
    };

    try {
      const registeredUser = await this.userRepository.register(user);
      return Result.ok(registeredUser);
    } catch (error) {
      console.log(error);
      return Result.fail('Error al registrar el usuario');
    }
  }
}
