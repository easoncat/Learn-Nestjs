import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomeuserDto } from './create-customeuser.dto';

export class UpdateCustomeuserDto extends PartialType(CreateCustomeuserDto) {}
