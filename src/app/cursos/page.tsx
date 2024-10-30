// front/src/app/cursos/page.tsx
import React from 'react';
import { container } from '@/shared/container';
import { GetCoursesUseCase } from '@/application/course/getCourses.use-case';
import { CategoryUseCase } from '@/application/category/getCategoryUseCase.use-case';
import CursosPage from '@/infrastructure/ui/components/sections/CursosPage/coursePage/CoursePage';
import Head from 'next/head';

async function getInitialData() {
  const getCoursesUseCase = container.get<GetCoursesUseCase>(GetCoursesUseCase);
  const getCoursesCategoryUseCase = container.get<CategoryUseCase>(CategoryUseCase);

  try {
    const [courses, categories] = await Promise.all([getCoursesUseCase.execute(), getCoursesCategoryUseCase.execute()]);

    return {
      courses,
      categories,
      error: null
    };
  } catch (error) {
    return {
      courses: [],
      categories: [],
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export default async function HomePage() {
  const initialData = await getInitialData();

  return (
    <>
      <Head>
        <title>Cursos disponibles</title>
        <meta name="description" content="Explora nuestros cursos y categorías." />
        <meta property="og:title" content="Cursos disponibles" />
        <meta property="og:description" content="Explora nuestros cursos y categorías." />
      </Head>
      <main>
        <CursosPage initialData={initialData} />
      </main>
    </>
  );
}
