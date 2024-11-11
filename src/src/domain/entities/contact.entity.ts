import { Default } from './Default';

export interface Contact extends Default {
  company: string;
  phone: string;
  email: string;
  query: string;
}
