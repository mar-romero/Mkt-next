import { CreateSubscriptionUseCase } from "@/application/subscription/createSubscription.use-case";
import { SubscriptionPlan } from "@/domain/entities/subscription.entity";
import { useState } from "react";
import { GetSubscriptionUseCase } from "@/application/subscription/getSubscription-use.case";
import { container } from "@/shared/container";
import { UpdateSubscriptionUseCase } from '@/application/subscription/updateSubscription.use-case';
  
const getSubscriptionUseCase = container.get<GetSubscriptionUseCase>(GetSubscriptionUseCase);
const createSubscriptionUseCase = container.get<CreateSubscriptionUseCase>(CreateSubscriptionUseCase);
const updateSubscriptionUseCase = container.get<UpdateSubscriptionUseCase>(UpdateSubscriptionUseCase);

// src/infrastructure/ui/hooks/useSubscription.ts
export const useSubscription = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleSubscription = async (plan: SubscriptionPlan) => {
    try {
      setLoading(true);
      setError(null);


      const currentSubscription = await getSubscriptionUseCase.execute();

      if (currentSubscription) {
        await updateSubscriptionUseCase.execute(plan);
      } else {
        await createSubscriptionUseCase.execute(plan);
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al procesar la suscripción');
    } finally {
      setLoading(false);
    }
  };

  return { handleSubscription, loading, error };
};
