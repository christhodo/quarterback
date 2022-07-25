import { Test, TestingModule } from '@nestjs/testing';
import { QuarterbacksController } from './quarterbacks.controller';
import { QuarterbacksService } from './quarterbacks.service';

describe('QuarterbacksController', () => {
  let controller: QuarterbacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuarterbacksController],
      providers: [QuarterbacksService],
    }).compile();

    controller = module.get<QuarterbacksController>(QuarterbacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
