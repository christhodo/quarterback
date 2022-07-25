import { Module } from '@nestjs/common';
import { QuarterbacksService } from './quarterbacks.service';
import { QuarterbacksController } from './quarterbacks.controller';

@Module({
  controllers: [QuarterbacksController],
  providers: [QuarterbacksService]
})
export class QuarterbacksModule {}
