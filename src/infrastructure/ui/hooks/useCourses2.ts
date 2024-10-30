import { CreateCourseUseCase } from '@/application/course/CreateCourseUseCase';
import { GetCoursesUseCase } from '@/application/course/getCourses.use-case';
import { UpdateCourseUseCase } from '@/application/course/UpdateCourseUseCase';
import { Course } from '@/domain/entities/course.entity';
import { container } from '@/shared/container';
import { useState, useEffect } from 'react';



  const getCoursesUseCase = container.get<GetCoursesUseCase>(GetCoursesUseCase);
  const createCourseUseCase = container.get<CreateCourseUseCase>(CreateCourseUseCase);
  const updateCourseUseCase = container.get<UpdateCourseUseCase>(UpdateCourseUseCase);

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const fetchedCourses = await getCoursesUseCase.execute();
      setCourses(fetchedCourses);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  };

  const createCourse = async (course: Omit<Course, 'id'>) => {
    try {
      const newCourse = await createCourseUseCase.execute(course);
      setCourses([...courses, newCourse]);
      return newCourse;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
      throw err;
    }
  };

  const updateCourse = async (id: string, course: Partial<Course>) => {
    try {
      const updatedCourse = await updateCourseUseCase.execute(id, course);
      setCourses(courses.map((c) => (c.id === id ? updatedCourse : c)));
      return updatedCourse;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
      throw err;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, loading, error, createCourse, updateCourse, refreshCourses: fetchCourses };
};
