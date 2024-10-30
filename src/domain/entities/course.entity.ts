// src/domain/entities/course.entity.ts
import { Category } from './category.entity';
import { Chapter } from './chapter.entity';
import { Default } from './Default';
import { UserCourseProgress } from './userCourseProgress.entity';

export interface Course extends Default {
  name: string;

  description: string;

  chapter: Chapter[];

  progress?: UserCourseProgress[];

  category: Category[];

}
