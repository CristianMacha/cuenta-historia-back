import { Module } from '@nestjs/common';
import { TypeUserController } from './type-user.controller';
import { TypeUserService } from './type-user.service';

@Module({
  controllers: [TypeUserController],
  providers: [TypeUserService]
})
export class TypeUserModule {}
