import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string) {
    return await this.findOne({ where: { email } });
  }
}
