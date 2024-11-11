  // shared/container.ts
  import { Container } from 'inversify';
  import { LoginUseCase } from '@/application/auth/login.use-case';
  import { AuthRepositoryImpl } from '@/infrastructure/repositories/auth.repository.impl';
  import { AuthRepository } from '@/domain/repositories/auth.repository';
import { CourseRepositoryImpl } from '@/infrastructure/repositories/course.repository.impl';
import { CourseRepository } from '@/domain/repositories/course.repository';
import { GetCardsUseCase } from '@/application/course/getCourseforcard.use-case';
import { UserRepository } from '@/domain/repositories/user.repository';
import { SendContactUseCase } from '@/application/user/sendContact.use-case';
import { UserRepositoryImpl } from '@/infrastructure/repositories/user.repository.impl';

  const AUTH_REPOSITORY = Symbol.for('AuthRepository');
  const COURSE_REPOSITORY = Symbol.for('CourseRepository');
  const USER_REPOSITORY = Symbol.for('UserRepository');
  const container = new Container();

  container.bind<AuthRepository>(AUTH_REPOSITORY).to(AuthRepositoryImpl);
  container.bind<CourseRepository>(COURSE_REPOSITORY).to(CourseRepositoryImpl);
  container.bind<UserRepository>(USER_REPOSITORY).to(UserRepositoryImpl);

  container.bind<GetCardsUseCase>(GetCardsUseCase).toSelf();
  container.bind<LoginUseCase>(LoginUseCase).toSelf();
container.bind<SendContactUseCase>(SendContactUseCase).toSelf();
  export { container };
