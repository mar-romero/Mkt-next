// infrastructure/ui/layouts/Layout/Layout.tsx
'use client';

import { Navbar } from "../components/Navbar/Navbar";


interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
