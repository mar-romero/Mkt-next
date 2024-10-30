// src/app/page.tsx
'use client';

import SectionOne from '@/infrastructure/ui/components/sections/Company/sectionOne/SectionOne';
import SectionTwo from '@/infrastructure/ui/components/sections/Company/sectionTwo/SectionTwo';
import React from 'react';


export default function HomePage() {


  return (
    <main>
      <SectionOne />
      <SectionTwo />
    </main>
  );
}