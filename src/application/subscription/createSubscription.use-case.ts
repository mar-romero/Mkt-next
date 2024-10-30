import { Subscription, SubscriptionPlan } from "@/domain/entities/subscription.entity";
import { ISubscriptionRepository } from "@/domain/repositories/subscription.repository";
import { inject, injectable } from "inversify";


// src/application/useCases/subscription/CreateSubscriptionUseCase.ts
@injectable()
export class CreateSubscriptionUseCase {
  constructor(
    @inject('SubscriptionRepository')
    private subscriptionRepository: ISubscriptionRepository
  ) {}

  async execute(plan: SubscriptionPlan): Promise<Subscription> {

    const endDate = new Date();
    switch (plan) {
      case 'MONTHLY':
        endDate.setMonth(endDate.getMonth() + 1);
        break;
      case 'SEMIANNUAL':
        endDate.setMonth(endDate.getMonth() + 6);
        break;
      case 'ANNUAL':
        endDate.setFullYear(endDate.getFullYear() + 1);
        break;
    }

    const subscription: Subscription = {
      id: crypto.randomUUID(),
      plan,
      startDate: new Date(),
      endDate,
      paymentMethod: plan.paymentMethod,
      status: 'ACTIVE'
    };

    return this.subscriptionRepository.create(subscription);
  }
}
