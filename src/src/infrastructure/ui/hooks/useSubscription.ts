import { CreateSubscriptionUseCase } from "@/application/subscription/createSubscription.use-case";
import { SubscriptionPlan } from "@/domain/entities/subscription.entity";
import { useState } from "react";
import { GetSubscriptionUseCase } from "@/application/subscription/getSubscription-use.case";
import { container } from "@/shared/container";
import { UpdateSubscriptionUseCase } from '@/application/subscription/updateSubscription.use-case';
import { PaymentMethod } from "@/type/subscription";
  
const getSubscriptionUseCase = container.get<GetSubscriptionUseCase>(GetSubscriptionUseCase);
const createSubscriptionUseCase = container.get<CreateSubscriptionUseCase>(CreateSubscriptionUseCase);
const updateSubscriptionUseCase = container.get<UpdateSubscriptionUseCase>(UpdateSubscriptionUseCase);

// src/infrastructure/ui/hooks/useSubscription.ts
export const useSubscription = () => {
  const [loadingPayments, setLoadingPayments] = useState<{
    plan: SubscriptionPlan | null;
    method: PaymentMethod | null;
  }>({
    plan: null,
    method: null
  });
  const [error, setError] = useState<string | null>(null);


  const handleSubscription = async (plan: SubscriptionPlan, method: PaymentMethod) => {
    try {
      setLoadingPayments({ plan, method });
      setError(null);

      const currentSubscription = await getSubscriptionUseCase.execute();

      if (currentSubscription) {
        await updateSubscriptionUseCase.execute(plan);
      } else {
        await createSubscriptionUseCase.execute(plan, method);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al procesar la suscripción');
    } finally {
      setLoadingPayments({ plan: null, method: null });
    }
  };

  return { handleSubscription, loadingPayments, error };
};
