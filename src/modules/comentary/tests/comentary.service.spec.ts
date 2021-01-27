import { Test, TestingModule } from '@nestjs/testing';
import { ComentaryService } from '../comentary.service';

describe('ComentaryService', () => {
  let service: ComentaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComentaryService],
    }).compile();

    service = module.get<ComentaryService>(ComentaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
