// src/infrastructure/hooks/useCards.ts
import { useState, useEffect } from 'react';
import { Card, GetCardsUseCase } from '@/application/course/getCourseforcard.use-case';
import { container } from '@/shared/container';
;
export const useCards = () => {
  const getCardsUseCase = container.get<GetCardsUseCase>(GetCardsUseCase);

  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCardsUseCase.execute();
        setCards(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return { cards, loading, error };
};
