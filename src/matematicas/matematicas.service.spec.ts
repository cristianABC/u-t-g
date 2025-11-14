import { Test, TestingModule } from '@nestjs/testing';
import { MatematicasService } from './matematicas.service';

describe('MatematicasService', () => {
  let service: MatematicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatematicasService],
    }).compile();

    service = module.get<MatematicasService>(MatematicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
