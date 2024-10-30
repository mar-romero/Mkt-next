// src/infrastructure/repositories/SubscriptionRepository.ts

import { Subscription, SubscriptionPlan } from "@/domain/entities/subscription.entity";
import { AxiosAPI } from "../adapters/http/api";
import { ISubscriptionRepository } from "@/domain/repositories/subscription.repository";
import { injectable } from "inversify";


@injectable()
export class SubscriptionRepository implements ISubscriptionRepository {
  private api: AxiosAPI;

  constructor() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/backend';
    this.api = new AxiosAPI({ domain: API_URL });
  }

  async create(subscription: Subscription): Promise<Subscription> {
    const { data } = await this.api.post<Subscription>('/subscriptions', subscription);

    return data;
  }

  async getCurrentSubscription(): Promise<Subscription | null> {
    const { data } = await this.api.get<Subscription | null>(`/subscriptions/user`);

    return data;
  }

  async updateSubscription(newPlan: SubscriptionPlan): Promise<Subscription> {
    const { data } = await this.api.put<Subscription>(`/subscriptions/user`, { plan: newPlan });
    
    return data;
  }
}