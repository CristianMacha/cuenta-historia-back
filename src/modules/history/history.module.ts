import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { HistoryController } from './history.controller';
import { HistoryRepository } from './history.repository';
import { HistoryService } from './history.service';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryRepository])],
  providers: [HistoryService],
  controllers: [HistoryController],
})
export class HistoryModule {}
