import { Test, TestingModule } from '@nestjs/testing';
import { AthusService } from './athus.service';

describe('AthusService', () => {
  let service: AthusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AthusService],
    }).compile();

    service = module.get<AthusService>(AthusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
