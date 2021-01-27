import { Module } from '@nestjs/common';
import { CodeUserController } from './code-user.controller';
import { CodeUserService } from './code-user.service';

@Module({
  controllers: [CodeUserController],
  providers: [CodeUserService]
})
export class CodeUserModule {}
