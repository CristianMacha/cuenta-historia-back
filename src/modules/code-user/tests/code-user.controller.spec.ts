import { Test, TestingModule } from '@nestjs/testing';
import { CodeUserController } from '../code-user.controller';

describe('CodeUserController', () => {
  let controller: CodeUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeUserController],
    }).compile();

    controller = module.get<CodeUserController>(CodeUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
