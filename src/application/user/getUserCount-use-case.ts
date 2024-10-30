// src/application/useCases/GetUserCountUseCase.ts

import { UserRepository } from "@/domain/repositories/user.repository";

export class GetUserCountUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<number> {
    return this.userRepository.getUserCount();
  }
}
