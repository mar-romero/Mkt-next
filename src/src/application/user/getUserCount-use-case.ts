// src/application/useCases/GetUserCountUseCase.ts

import { UserRepository } from "@/domain/repositories/user.repository";
import { injectable,inject } from "inversify";


@injectable()
export class GetUserCountUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: UserRepository
  ) {}

  async execute(): Promise<number> {
    return this.userRepository.getUserCount();
  }
}
