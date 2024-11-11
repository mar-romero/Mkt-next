import { Subscription, SubscriptionPlan } from "@/domain/entities/subscription.entity";
import { ISubscriptionRepository } from "@/domain/repositories/subscription.repository";
import { inject, injectable } from "inversify";

// src/application/useCases/subscription/UpdateSubscriptionUseCase.ts
@injectable()
export class UpdateSubscriptionUseCase {
  constructor(
    @inject('SubscriptionRepository')
    private subscriptionRepository: ISubscriptionRepository
  ) {}
  async execute(newPlan: SubscriptionPlan): Promise<Subscription> {
    return this.subscriptionRepository.updateSubscription(newPlan);
  }
}
