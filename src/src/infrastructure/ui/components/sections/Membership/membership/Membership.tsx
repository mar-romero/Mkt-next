import React from 'react';
import styles from './Membership.module.scss';
import Group9 from '../../../../public/images/Group9.png';
import Group8 from '../../../../public/images/Group8.png';
import Group10 from '../../../../public/images/Group10.png';
import { useSubscription } from '@/infrastructure/ui/hooks/useSubscription';
import Image from 'next/image';
import { PaymentMethod, SubscriptionPlan } from '@/type/subscription';

const Membership: React.FC = () => {
  const { handleSubscription, loadingPayments } = useSubscription();

  const handleSubscriptionClick = async (plan: SubscriptionPlan, method: PaymentMethod) => {
    await handleSubscription(plan, method);
  };

  const SubscriptionButtons = ({ plan }: { plan: SubscriptionPlan }) => (
    <div className={styles.paymentButtons}>
      <button
        className={`${styles.btn} ${styles.paypalBtn}`}
        onClick={() => handleSubscriptionClick(plan, 'PAYPAL')}
        disabled={loadingPayments.plan === plan && loadingPayments.method === 'PAYPAL'}
      >
        {loadingPayments.plan === plan && loadingPayments.method === 'PAYPAL' ? (
          'Procesando...'
        ) : (
          <>
            <i className="fab fa-paypal"></i> PayPal
          </>
        )}
      </button>
      <button
        className={`${styles.btn} ${styles.mercadopagoBtn}`}
        onClick={() => handleSubscriptionClick(plan, 'MERCADOPAGO')}
        disabled={loadingPayments.plan === plan && loadingPayments.method === 'MERCADOPAGO'}
      >
        {loadingPayments.plan === plan && loadingPayments.method === 'MERCADOPAGO' ? (
          'Procesando...'
        ) : (
          <>
            <i className="fas fa-shopping-cart"></i> MercadoPago
          </>
        )}
      </button>
    </div>
  );

  return (
    <section className={styles.membership}>
      <div className={styles.container}>
        <div className="row">
          <div className="col-md-4">
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src={Group9} alt="Imagen 1" className="fas fa-rocket" />
              </div>
              <h3>Membresía: Impulso Mensual</h3>
              <div className={styles.membershipTxt}>
                <p>
                  Esta membresía está diseñada para aquellos que desean explorar y comenzar a aprender con flexibilidad,
                  ofreciendo acceso completo a todos los cursos con un compromiso mensual renovable.
                </p>
              </div>
              <div className={styles.membershipBtn}>
                <p>$3.000 ARS / mes</p>
              </div>
              <SubscriptionButtons plan="MONTHLY" />
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${styles.card} ${styles.cardMiddle}`}>
              <div className={`${styles.icon} ${styles.iconMiddle}`}>
                <Image src={Group8} alt="Imagen 1" className="fas fa-rocket" />
              </div>
              <h3>Membresía: Progreso Semestral</h3>
              <div className={styles.membershipTxt}>
                <p>
                  Orientada a individuos o empresas que están comprometidos con el aprendizaje continuo y desean una
                  solución a medio plazo, esta membresía ofrece un descuento por el compromiso de seis meses.
                </p>
              </div>
              <div className={styles.membershipBtn}>
                <p>$5.000 ARS / 6 meses</p>
              </div>
              <SubscriptionButtons plan="SEMIANNUAL" />
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${styles.card} ${styles.cadDark}`}>
              <div className={`${styles.icon} ${styles.iconMiddle}`}>
                <Image src={Group10} alt="Imagen 1" className="fas fa-rocket" />
              </div>
              <h3>Membresía: Premium Anual</h3>
              <div className={styles.membershipTxt}>
                <p>La opción para los más dedicados al crecimiento y desarrollo profesional.</p>
              </div>
              <div className={styles.membershipBtn}>
                <p>$12.000 ARS / año</p>
              </div>
              <SubscriptionButtons plan="ANNUAL" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
