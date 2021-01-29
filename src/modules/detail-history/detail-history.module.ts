import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { DetailHistoryController } from './detail-history.controller';
import { DetailHistoryRepository } from './detail-history.repository';
import { DetailHistoryService } from './detail-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([DetailHistoryRepository])],
  controllers: [DetailHistoryController],
  providers: [DetailHistoryService],
})
export class DetailHistoryModule {}
