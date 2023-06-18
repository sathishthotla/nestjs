import { Test, TestingModule } from '@nestjs/testing';
import { AthusController } from './athus.controller';
import { AthusService } from './athus.service';

describe('AthusController', () => {
  let controller: AthusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AthusController],
      providers: [AthusService],
    }).compile();

    controller = module.get<AthusController>(AthusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
