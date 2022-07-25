import { Test, TestingModule } from '@nestjs/testing';
import { QuarterbacksService } from './quarterbacks.service';

describe('QuarterbacksService', () => {
  let service: QuarterbacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuarterbacksService],
    }).compile();

    service = module.get<QuarterbacksService>(QuarterbacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
