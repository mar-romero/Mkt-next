// src/app/page.tsx
'use client';

import RegistrationFormComp from '@/infrastructure/ui/components/sections/RegistrationForm/RegistrationForm';
import React from 'react';


export default function HomePage() {


  return (
    <main>
      <RegistrationFormComp />
    </main>
  );
}