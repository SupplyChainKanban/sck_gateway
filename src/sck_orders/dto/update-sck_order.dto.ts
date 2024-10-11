import { PartialType } from '@nestjs/mapped-types';
import { CreateSckOrderDto } from './create-sck_order.dto';

export class UpdateSckOrderDto extends PartialType(CreateSckOrderDto) {}
