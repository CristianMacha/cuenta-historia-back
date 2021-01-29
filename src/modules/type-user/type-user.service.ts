import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { TypeUserRepository } from './type-user.repository';

@Injectable()
export class TypeUserService {
  constructor(
    private typeUserRepository: TypeUserRepository,
  ) {}

  async create(createTypeUserDto: CreateTypeUserDto) {
    const typeUserDb = await this.typeUserRepository.findByName(
      createTypeUserDto.name,
    );
    if (typeUserDb)
      throw new BadRequestException('El tipo de usuario ya existe.');

    const createdTypeUser = await this.typeUserRepository.register(
      createTypeUserDto,
    );
    return createdTypeUser;
  }
}
