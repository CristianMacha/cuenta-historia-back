import { Test, TestingModule } from '@nestjs/testing';
import { ComentaryController } from '../comentary.controller';

describe('ComentaryController', () => {
  let controller: ComentaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComentaryController],
    }).compile();

    controller = module.get<ComentaryController>(ComentaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
