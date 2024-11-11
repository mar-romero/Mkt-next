// src/infrastructure/hooks/useUserCount.ts
import { useState, useEffect } from 'react';
import { container } from '@/shared/container';
import { GetUserCountUseCase } from '@/application/user/getUserCount-use-case';

const getUserCountUseCase = container.get<GetUserCountUseCase>(GetUserCountUseCase);

export const useUserCount = () => {
  const [userCount, setUserCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const count = await getUserCountUseCase.execute();
        setUserCount(count);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchUserCount();
  }, []);

  return { userCount, loading, error };
};
