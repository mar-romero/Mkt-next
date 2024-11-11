// src/infrastructure/ui/hooks/useContact.ts
import { useState } from 'react';
import { Contact } from '@/domain/entities/contact.entity';
import { container } from '@/shared/container';
import { SendContactUseCase } from '@/application/user/sendContact.use-case';

interface ContactState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export const useContact = () => {
  const [state, setState] = useState<ContactState>({
    loading: false,
    error: null,
    success: false
  });

  const sendContactUseCase = container.get<SendContactUseCase>(SendContactUseCase);

  const sendContact = async (contact: Contact) => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null, success: false }));
      await sendContactUseCase.execute(contact);
      setState((prev) => ({ ...prev, loading: false, success: true }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
        success: false
      }));
    }
  };

  return { ...state, sendContact };
};
