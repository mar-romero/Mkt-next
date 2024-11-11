import React, { useState } from 'react';
import { Course } from '@/domain/entities/course.entity';
import { Chapter } from '@/domain/entities/chapter.entity';
import { useUserCount } from '@/infrastructure/ui/hooks/useUserCount';
import styles from './dashboard.module.scss';
import { useCourses } from '@/infrastructure/ui/hooks/useCourses2';

const Dashboard: React.FC = () => {
  const { userCount, loading: userCountLoading, error: userCountError } = useUserCount();
  const { courses, loading: coursesLoading, error: coursesError, createCourse } = useCourses();
  const [isCreating, setIsCreating] = useState(false);
  const [newCourse, setNewCourse] = useState<Omit<Course, 'id' | 'progress'>>({
    name: '',
    description: '',
    chapter: [],
    category: []
  });

  const handleCreateCourse = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createCourse(newCourse);
    setIsCreating(false);
    setNewCourse({ name: '', description: '', chapter: [], category: [] });
  };

  const addChapter = () => {
    setNewCourse((prev) => ({
      ...prev,
      chapter: [...prev.chapter, { id: '', name: '', content: '', courseId: '', course: {} as Course, progress: [] }]
    }));
  };

  const updateChapter = (index: number, field: keyof Chapter, value: string) => {
    setNewCourse((prev) => ({
      ...prev,
      chapter: prev.chapter.map((ch, i) => (i === index ? { ...ch, [field]: value } : ch))
    }));
  };

  if (userCountLoading || coursesLoading) return <div className={styles.loading}>Loading...</div>;
  if (userCountError || coursesError) return <div className={styles.error}>Error occurred</div>;

  return (
      <main className={styles.content}>
        <section className={styles.userCount}>
          <h2>Usuarios registrados</h2>
          <p>{userCount}</p>
        </section>

        <section className={styles.courseSection}>
          <h2>Mis Curso</h2>
          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.createCourse}>
          <h2>Crear Curso</h2>
          <button onClick={() => setIsCreating(!isCreating)} className={styles.toggleButton}>
            {isCreating ? 'Cancelar' : 'Crear Nuevo Curso'}
          </button>
          {isCreating && (
            <form onSubmit={handleCreateCourse} className={styles.courseForm}>
              <input
                type="text"
                placeholder="Nombre del curso"
                value={newCourse.name}
                onChange={(e) => setNewCourse((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
              <textarea
                placeholder="Descripción del curso"
                value={newCourse.description}
                onChange={(e) => setNewCourse((prev) => ({ ...prev, description: e.target.value }))}
                required
              ></textarea>
              <div className={styles.chapters}>
                <h3>Capítulos</h3>
                {newCourse.chapter.map((chapter, index) => (
                  <div key={index} className={styles.chapterInputs}>
                    <input
                      type="text"
                      placeholder="Nombre del capítulo"
                      value={chapter.name}
                      onChange={(e) => updateChapter(index, 'name', e.target.value)}
                      required
                    />
                    <textarea
                      placeholder="Contenido del capítulo"
                      value={chapter.content}
                      onChange={(e) => updateChapter(index, 'content', e.target.value)}
                      required
                    ></textarea>
                  </div>
                ))}
                <button type="button" onClick={addChapter} className={styles.addChapterButton}>
                  Agregar Capítulo
                </button>
              </div>
              <button type="submit" className={styles.submitButton}>
                Crear Curso
              </button>
            </form>
          )}
        </section>
      </main>
  );
};
export default Dashboard;
