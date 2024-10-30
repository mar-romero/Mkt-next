// src/app/page.tsx
'use client';

import AboutMemberships from '@/infrastructure/ui/components/sections/AboutSection/aboutMemberships/AboutMemberships';
import HeroSection from '@/infrastructure/ui/components/sections/AboutSection/heroSection/HeroSection';
import React from 'react';


export default function HomePage() {


  return (
    <main>
      <HeroSection />
      <AboutMemberships />
    </main>
  );
}