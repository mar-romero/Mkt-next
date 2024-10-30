// src/infrastructure/ui/hooks/useRegistration.ts
import { useState } from 'react';
import { RegisterUserUseCase } from '@/application/user/register.use-case';
import { container } from '@/shared/container';
import { User } from '@/domain/entities/user.entity';

interface RegistrationForm {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export const useRegistration = () => {
  const registerUserUseCase = container.get<RegisterUserUseCase>(RegisterUserUseCase);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // cambair1
  const register = async (formData: RegistrationForm): Promise<User | null> => {
    try {
      setLoading(true);
      setError(null);

      const result = await registerUserUseCase.execute(formData);

      if (!result) {
        setError(result);
        return null;
      }

      return result.getValue();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error en el registro');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};
