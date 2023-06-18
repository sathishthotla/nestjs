import { PartialType } from '@nestjs/mapped-types';
import { CreateAthusDto } from './create-athus.dto';

export class UpdateAthusDto extends PartialType(CreateAthusDto) {}
