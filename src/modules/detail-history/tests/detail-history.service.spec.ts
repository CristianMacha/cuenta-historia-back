import { Test, TestingModule } from '@nestjs/testing';
import { DetailHistoryService } from '../detail-history.service';

describe('DetailHistoryService', () => {
  let service: DetailHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailHistoryService],
    }).compile();

    service = module.get<DetailHistoryService>(DetailHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
