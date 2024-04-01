import { Test, TestingModule } from '@nestjs/testing';
import { CustomeuserService } from './customeuser.service';

describe('CustomeuserService', () => {
  let service: CustomeuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomeuserService],
    }).compile();

    service = module.get<CustomeuserService>(CustomeuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
