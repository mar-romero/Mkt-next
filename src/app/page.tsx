// src/app/page.tsx
'use client';

import React from 'react';
import { Navbar } from '@/infrastructure/ui/components/Navbar/Navbar';
import FirstSection from '@/infrastructure/ui/components/sections/HomePage/firstSection/FirstSection';
import AboutUsSection from '@/infrastructure/ui/components/sections/HomePage/aboutUsSection/AboutUsSection';
import CertificationSection from '@/infrastructure/ui/components/sections/HomePage/certificationSection/CertificationSection';
import CarouselCard from '@/infrastructure/ui/components/sections/HomePage/carouselCard/CarouselCard';
import SocialSection from '@/infrastructure/ui/components/sections/HomePage/socialSection/SocialSection';
import { useCards } from '@/infrastructure/ui/hooks/useCards';

export default function HomePage() {
  const { cards, loading, error } = useCards();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <Navbar />
      <FirstSection />
      <AboutUsSection />
      <CertificationSection />
      <CarouselCard cards={cards} />
      <SocialSection />
      <Footer />
    </main>
  );
}