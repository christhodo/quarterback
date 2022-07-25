import { Module } from '@nestjs/common';
import { QuarterbacksModule } from '../quarterbacks/quarterbacks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [QuarterbacksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
