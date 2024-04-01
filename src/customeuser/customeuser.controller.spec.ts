import { Test, TestingModule } from '@nestjs/testing';
import { CustomeuserController } from './customeuser.controller';
import { CustomeuserService } from './customeuser.service';

describe('CustomeuserController', () => {
  let controller: CustomeuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomeuserController],
      providers: [CustomeuserService],
    }).compile();

    controller = module.get<CustomeuserController>(CustomeuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
