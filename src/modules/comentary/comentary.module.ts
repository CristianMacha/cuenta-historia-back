import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ComentaryController } from './comentary.controller';
import { ComentaryRepository } from './comentary.repository';
import { ComentaryService } from './comentary.service';

@Module({
  imports: [TypeOrmModule.forFeature([ComentaryRepository])],
  providers: [ComentaryService],
  controllers: [ComentaryController],
})
export class ComentaryModule {}
