// src/domain/useCases/GetCardsUseCase.ts
import { inject, injectable } from 'inversify';
import { CourseRepository } from '@/domain/repositories/course.repository';

export interface Card {
  id: string;
  title: string;
  content: string;
}

@injectable()
export class GetCardsUseCase {

  constructor(  
  @inject('CourseRepository')
  private cardRepository: CourseRepository) {}

  execute(): Promise<Card[]> {
    return this.cardRepository.getCards();
  }
}
