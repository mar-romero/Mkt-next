// front/src/app/cursos/page.tsx
import React from 'react';
import CursosPage from '@/infrastructure/ui/components/sections/CursosPage/coursePage/CoursePage';
import Head from 'next/head';

//ya esta
export default async function HomePage() {

  return (
    <>
      <Head>
        <title>Cursos disponibles</title>
        <meta name="description" content="Explora nuestros cursos y categorías." />
        <meta property="og:title" content="Cursos disponibles" />
        <meta property="og:description" content="Explora nuestros cursos y categorías." />
      </Head>
      <main>
        <CursosPage/>
      </main>
    </>
  );
}
