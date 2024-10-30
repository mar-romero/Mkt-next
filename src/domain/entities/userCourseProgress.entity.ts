import { Chapter } from "./chapter.entity";
import { Course } from "./course.entity";
import { Default } from "./Default";
import { User } from "./user.entity";

export class UserCourseProgress extends Default {

  user!: User;


  course!: Course;

  chapter!: Chapter;
}
