import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { LikeController } from './like.controller';
import { LikeRepository } from './like.repository';
import { LikeService } from './like.service';

@Module({
  imports: [TypeOrmModule.forFeature([LikeRepository])],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
