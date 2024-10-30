import { Course } from "./course.entity";
import { Default } from "./Default";

// src/domain/entities/category.entity.ts
export interface Category extends Default {

  name: string;
  course: Course[];
}
