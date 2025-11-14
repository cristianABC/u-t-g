import { Module } from '@nestjs/common';
import { MatematicasService } from './matematicas.service';
import { MatematicasController } from './matematicas.controller';

@Module({
  controllers: [MatematicasController],
  providers: [MatematicasService],
})
export class MatematicasModule {}
