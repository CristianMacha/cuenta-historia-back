import { Test, TestingModule } from '@nestjs/testing';
import { CodeUserService } from '../code-user.service';

describe('CodeUserService', () => {
  let service: CodeUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeUserService],
    }).compile();

    service = module.get<CodeUserService>(CodeUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
