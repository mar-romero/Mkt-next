// src/infrastructure/ui/hooks/useCourses.ts
import { useState } from 'react';
import { Course } from '@/domain/entities/course.entity';
import { Category } from '@/domain/entities/category.entity';
import { SearchCoursesUseCase } from '@/application/course/searchCourses.use-case';
import { container } from '@/shared/container';
import { InitialData } from '../components/sections/CursosPage/coursePage/CoursePage';

interface CourseState {
  courses: Course[];
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export const useCourses = (initialData: InitialData) => {
  const [state, setState] = useState<CourseState>({
    courses: initialData.courses,
    categories: initialData.categories,
    loading: false,
    error: initialData.error
  });

  const searchCoursesUseCase = container.get<SearchCoursesUseCase>(SearchCoursesUseCase);

const searchCourses = async (query: string) => {
  setState((prev) => ({ ...prev, loading: true, error: null }));
  if (!query.trim()) {
    setState({ ...state, courses: initialData.courses, loading: false });
    return;
  }

  try {
    const data = await searchCoursesUseCase.execute(query);
    setState({ ...state, courses: data, loading: false });
  } catch (error) {
    setState({ ...state, error: error instanceof Error ? error.message : 'Unknown error', loading: false });
  }
};

  return { ...state, searchCourses };
};