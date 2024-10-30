import { Subscription, SubscriptionPlan } from "../entities/subscription.entity";

// src/domain/repositories/ISubscriptionRepository.ts
export interface ISubscriptionRepository {
  create(subscription: Subscription): Promise<Subscription>;
  getCurrentSubscription(): Promise<Subscription | null>;
  updateSubscription(newPlan: SubscriptionPlan): Promise<Subscription>;
}
