// src/app/page.tsx
'use client';

import React from 'react';
import Membership from '@/infrastructure/ui/components/sections/Membership/membership/Membership';
import ContentSection from '@/infrastructure/ui/components/sections/Membership/contentSection/ContentSection';
//ya esta


export default function HomePage() {


  return (
    <main>
      <Membership />
      <ContentSection />
    </main>
  );
}