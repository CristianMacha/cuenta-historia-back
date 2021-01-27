import { Test, TestingModule } from '@nestjs/testing';
import { DetailHistoryController } from '../detail-history.controller';

describe('DetailHistoryController', () => {
  let controller: DetailHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailHistoryController],
    }).compile();

    controller = module.get<DetailHistoryController>(DetailHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
