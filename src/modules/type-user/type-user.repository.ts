import { EntityRepository, Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { ReadTypeUserDto } from './dto/read-type-user.dto';
import { TypeUser } from './type-user.entity';
import { User } from '../user/user.entity';

@EntityRepository(TypeUser)
export class TypeUserRepository extends Repository<TypeUser> {
  async findByName(name: string) {
    const typeUserdb = await this.findOne({ where: { name } });
    return typeUserdb;
  }
  async register(createTypeUserDto: CreateTypeUserDto) {
    const newTypeUser = this.create(createTypeUserDto);
    newTypeUser.active = true;
    const createdTypeUser = await this.save(newTypeUser);
    return plainToClass(ReadTypeUserDto, createdTypeUser);
  }

  async findById(typUserId: number) {
    const typeUserdb = await this.findOne(typUserId);
    return typeUserdb;
  }
}
