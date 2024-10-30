import { Contact } from '../entities/contact.entity';
import { User } from '../entities/user.entity';

export interface UserRepository {
  sendContact(contact: Contact): Promise<void>;
  register(user: User): Promise<User>;
  checkEmailExists(email: string): Promise<boolean>;
  getUserCount(): Promise<number>;
}
