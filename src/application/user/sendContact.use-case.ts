// src/application/contact/sendContact.use-case.ts
import { inject, injectable } from 'inversify';
import { Contact } from '@/domain/entities/contact.entity';
import { UserRepository } from '@/domain/repositories/user.repository';

@injectable()
export class SendContactUseCase {
  constructor(
    @inject('ContactRepository')
    private contactRepository: UserRepository
  ) {}

  execute(contact: Contact): Promise<void> {
    return this.contactRepository.sendContact(contact);
  }
}
