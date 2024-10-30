// src/infrastructure/ui/hooks/useLoginForm.ts
import { useReducer } from 'react';
import { useRouter } from 'next/router';
import { LoginUseCase } from '@/application/auth/login.use-case';
import { container } from '@/shared/container';
import { Email } from '@/domain/value-objects/email.vo';
import { Password } from '@/domain/value-objects/password.vo';

interface LoginState {
  email: string;
  password: string;
  showPassword: boolean;
  isLoading: boolean;
  error: string | null;
  touchedFields: Set<string>;
}

type LoginAction =
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'TOGGLE_PASSWORD_VISIBILITY' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_FIELD_TOUCHED'; payload: string }
  | { type: 'RESET_FORM' };

const initialState: LoginState = {
  email: '',
  password: '',
  showPassword: false,
  isLoading: false,
  error: null,
  touchedFields: new Set()
};

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload, error: null };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload, error: null };
    case 'TOGGLE_PASSWORD_VISIBILITY':
      return { ...state, showPassword: !state.showPassword };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload, error: action.payload ? null : state.error };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_FIELD_TOUCHED':
      return { ...state, touchedFields: new Set(state.touchedFields.add(action.payload)) };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

export const useLoginForm = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const router = useRouter();
  const loginUseCase = container.get<LoginUseCase>(LoginUseCase);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const email = new Email(state.email);
      const password = Password.create(state.password);

      if (password.isFailure()) {
        throw new Error(password.getError() || 'Contraseña inválida');
      }

      await loginUseCase.execute({ email: email.getValue(), password: password.getValue().toString() });
      router.push('/cursos');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error en inicio de sesión';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return {
    state,
    handleSubmit,
    setEmail: (email: string) => dispatch({ type: 'SET_EMAIL', payload: email }),
    setPassword: (password: string) => dispatch({ type: 'SET_PASSWORD', payload: password }),
    togglePasswordVisibility: () => dispatch({ type: 'TOGGLE_PASSWORD_VISIBILITY' }),
    setFieldTouched: (field: string) => dispatch({ type: 'SET_FIELD_TOUCHED', payload: field }),
    resetForm: () => dispatch({ type: 'RESET_FORM' })
  };
};
