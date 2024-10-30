import { Default } from "./Default";
import { Subscription } from "./subscription.entity";
import { UserCourseProgress } from "./userCourseProgress.entity";
 export enum UserRoles{
  ADMIN = 'admin',
  USER = 'user'
}

export interface User extends Default {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  password?: string;
  userName: string;
  phone: string;
  role: UserRoles;
  progress?: UserCourseProgress[];

  subscription?: Subscription;
}

