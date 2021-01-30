import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { signupDto } from '../auth/dto/signup.dto';
import { encryptPassword } from '../auth/utils/bcrypt';
import { ReadUserDto } from './dto/read-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signup(signupDto: signupDto) {
    const hashPassword = await encryptPassword(signupDto.password);
    const newUser = this.userRepository.create(signupDto);
    newUser.password = hashPassword;
    newUser.confirmed = false;
    newUser.active = true;
    newUser.google = false;
    newUser.type_user = signupDto.type_user;

    const createdUser = await this.userRepository.save(newUser);
    return plainToClass(ReadUserDto, createdUser);
  }

  async getUserById(userId: number) {
    const userdb = await this.userRepository.findById(userId);
    return userdb;
  }

  async getUserByEmail(email: string) {
    const userdb = await this.userRepository.findByEmail(email);
    return userdb;
  }
}
