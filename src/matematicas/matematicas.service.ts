import { Injectable } from '@nestjs/common';
import { CreateMatematicaDto } from './dto/create-matematica.dto';
import { UpdateMatematicaDto } from './dto/update-matematica.dto';

@Injectable()
export class MatematicasService {
  create(createMatematicaDto: CreateMatematicaDto) {
    return 'This action adds a new matematica';
  }

  findAll() {
    return `This action returns all matematicas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matematica`;
  }

  update(id: number, updateMatematicaDto: UpdateMatematicaDto) {
    return `This action updates a #${id} matematica`;
  }

  remove(id: number) {
    return `This action removes a #${id} matematica`;
  }
}
