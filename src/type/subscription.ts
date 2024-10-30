import { Subscription } from "@/domain/entities/subscription.entity";

// src/types/subscription.ts
export type SubscriptionPlan = 'MONTHLY' | 'SEMIANNUAL' | 'ANNUAL';

export interface SubscriptionResponse {
  success: boolean;
  data?: Subscription;
  error?: string;
}
