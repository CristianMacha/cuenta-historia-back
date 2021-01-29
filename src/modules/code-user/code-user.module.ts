import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { CodeUserController } from './code-user.controller';
import { CodeUserRepository } from './code-user.repository';
import { CodeUserService } from './code-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([CodeUserRepository])],
  controllers: [CodeUserController],
  providers: [CodeUserService],
})
export class CodeUserModule {}
