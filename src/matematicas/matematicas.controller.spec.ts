import { Test, TestingModule } from '@nestjs/testing';
import { MatematicasController } from './matematicas.controller';
import { MatematicasService } from './matematicas.service';

describe('MatematicasController', () => {
  let controller: MatematicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatematicasController],
      providers: [MatematicasService],
    }).compile();

    controller = module.get<MatematicasController>(MatematicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
