// src/app/page.tsx
'use client';

import Dashboard from '@/infrastructure/ui/components/sections/dashboard/dashboard';
import React from 'react';

export default function HomePage() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}
