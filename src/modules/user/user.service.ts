import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUserById(userId: number) {
    const userdb = await this.userRepository.findById(userId);
    return userdb;
  }
}
