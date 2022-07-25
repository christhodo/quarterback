import { PartialType } from '@nestjs/mapped-types';
import { CreateQuarterbackDto } from './create-quarterback.dto';

export class UpdateQuarterbackDto extends PartialType(CreateQuarterbackDto) {}
