// src/domain/value-objects/password.vo.ts
import { Result } from './result.vo';

export class Password {
  private readonly value: string;

  private constructor(password: string) {
    this.value = password;
  }

  public static create(password: string): Result<Password> {
    const minLength = 6;
    const maxLength = 50;

    if (password.length < minLength) return Result.fail('Debe tener al menos 6 caracteres');
    if (password.length > maxLength) return Result.fail('No puede exceder los 50 caracteres');
    if (!/[A-Z]/.test(password)) return Result.fail('Debe incluir una mayúscula');
    if (!/[a-z]/.test(password)) return Result.fail('Debe incluir una minúscula');
    if (!/\d/.test(password)) return Result.fail('Debe incluir un número');
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return Result.fail('Debe incluir un carácter especial');

    return Result.ok(new Password(password));
  }

  public getValue(): string {
    return this.value;
  }
}
