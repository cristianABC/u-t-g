import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatematicasService } from './matematicas.service';
import { CreateMatematicaDto } from './dto/create-matematica.dto';
import { UpdateMatematicaDto } from './dto/update-matematica.dto';

@Controller('matematicas')
export class MatematicasController {
  constructor(private readonly matematicasService: MatematicasService) {}

  @Post()
  create(@Body() createMatematicaDto: CreateMatematicaDto) {
    return this.matematicasService.create(createMatematicaDto);
  }

  @Get()
  findAll() {
    return this.matematicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matematicasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatematicaDto: UpdateMatematicaDto) {
    return this.matematicasService.update(+id, updateMatematicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matematicasService.remove(+id);
  }
}
