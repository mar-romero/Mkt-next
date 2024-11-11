;
import { Subscription } from '@/domain/entities/subscription.entity';
import { ISubscriptionRepository } from '@/domain/repositories/subscription.repository';
import { inject, injectable } from 'inversify';

// src/application/useCases/subscription/UpdateSubscriptionUseCase.ts
@injectable()
export class GetSubscriptionUseCase {
  constructor(
    @inject('SubscriptionRepository') 
    private subscriptionRepository: ISubscriptionRepository) {}

  async execute(): Promise<Subscription | null> {
    return this.subscriptionRepository.getCurrentSubscription();
  }
}
