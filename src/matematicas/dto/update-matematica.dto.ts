import { PartialType } from '@nestjs/swagger';
import { CreateMatematicaDto } from './create-matematica.dto';

export class UpdateMatematicaDto extends PartialType(CreateMatematicaDto) {}
