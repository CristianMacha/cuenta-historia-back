import { Module } from '@nestjs/common';
import { ComentaryService } from './comentary.service';
import { ComentaryController } from './comentary.controller';

@Module({
  providers: [ComentaryService],
  controllers: [ComentaryController]
})
export class ComentaryModule {}
