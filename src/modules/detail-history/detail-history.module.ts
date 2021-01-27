import { Module } from '@nestjs/common';
import { DetailHistoryController } from './detail-history.controller';
import { DetailHistoryService } from './detail-history.service';

@Module({
  controllers: [DetailHistoryController],
  providers: [DetailHistoryService]
})
export class DetailHistoryModule {}
