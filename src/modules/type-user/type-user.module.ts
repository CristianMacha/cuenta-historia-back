import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { TypeUserController } from './type-user.controller';
import { TypeUserRepository } from './type-user.repository';
import { TypeUserService } from './type-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeUserRepository])],
  controllers: [TypeUserController],
  providers: [TypeUserService],
})
export class TypeUserModule {}
