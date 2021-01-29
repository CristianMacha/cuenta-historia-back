import { plainToClass } from 'class-transformer';
import { EntityRepository, Repository } from 'typeorm';

import { signupDto } from '../auth/dto/signup.dto';
import { TypeUser } from '../type-user/type-user.entity';
import { ReadUserDto } from './dto/read-user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string) {
    return await this.findOne({ where: { email } });
  }

  async signup(signupDto: signupDto, hashPassword: string, typeUser: TypeUser) {
    const newUser = this.create(signupDto);
    newUser.password = hashPassword;
    newUser.confirmed = false;
    newUser.active = true;
    newUser.google = false;
    newUser.type_user = typeUser;

    const createdUser = await this.save(newUser);
    return plainToClass(ReadUserDto, createdUser);
  }
}
