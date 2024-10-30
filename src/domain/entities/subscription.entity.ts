// src/domain/entities/Subscription.ts
import { Default } from './Default';
import { User } from './user.entity';

export type SubscriptionPlan = 'MONTHLY' | 'SEMIANNUAL' | 'ANNUAL';

export interface Subscription extends Default {
  id: string;
  user?: User;
  plan: SubscriptionPlan;
  startDate: Date;
  endDate: Date;
  paymentMethod: string;
  status: 'ACTIVE' | 'CANCELLED' | 'EXPIRED';
}
