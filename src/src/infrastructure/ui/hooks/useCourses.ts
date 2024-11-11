// src/infrastructure/ui/hooks/useCourses.ts
import { useState, useEffect } from 'react';
import { Course } from '@/domain/entities/course.entity';
import { Category } from '@/domain/entities/category.entity';
import { SearchCoursesUseCase } from '@/application/course/searchCourses.use-case';
import { container } from '@/shared/container';
import { GetInitialDataUseCase } from '@/application/subscription/getAllCourses.use-case';

interface CourseState {
  courses: Course[];
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  categories: [],
  loading: true,
  error: null
};

export const useCourses = () => {
  const [state, setState] = useState<CourseState>(initialState);

  const searchCoursesUseCase = container.get<SearchCoursesUseCase>(SearchCoursesUseCase);
  const getInitialDataUseCase = container.get<GetInitialDataUseCase>(GetInitialDataUseCase);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const { courses, categories } = await getInitialDataUseCase.execute();
      setState({
        courses,
        categories,
        loading: false,
        error: null
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Error loading initial data'
      }));
    }
  };

  const searchCourses = async (query: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    if (!query.trim()) {
      loadInitialData();
      return;
    }

    try {
      const data = await searchCoursesUseCase.execute(query);
      setState((prev) => ({
        ...prev,
        courses: data,
        loading: false
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Error searching courses',
        loading: false
      }));
    }
  };

  return { ...state, searchCourses };
};
