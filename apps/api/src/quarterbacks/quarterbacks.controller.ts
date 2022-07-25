import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { QuarterbacksService } from './quarterbacks.service';
import { Quarterback } from '@quarterback-angular/api-interfaces';

@Controller('quarterbacks')
export class QuarterbacksController {
  constructor(private readonly quarterbacksService: QuarterbacksService) {}

  @Post()
  create(@Body() quarterback: Quarterback) {
    return this.quarterbacksService.create(quarterback);
  }

  @Get()
  findAll() {
    return this.quarterbacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quarterbacksService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() quarterback: Quarterback) {
    return this.quarterbacksService.update(id, quarterback);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quarterbacksService.remove(id);
  }
}
