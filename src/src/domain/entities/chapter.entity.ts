import { Course } from "./course.entity";
import { Default } from "./Default";
import { UserCourseProgress } from "./userCourseProgress.entity";

export class Chapter extends Default {
  name!: string;

  content!: string;

  courseId!: string;


  course!: Course;

  progress!: UserCourseProgress[];
}