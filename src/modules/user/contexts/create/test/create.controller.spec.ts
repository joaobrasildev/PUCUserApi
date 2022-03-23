import { Test, TestingModule } from '@nestjs/testing';
import { CreateuserController } from '../create.controller';
import { CreateUserService } from '../create.service';
import { createParams, createResult } from './mocks/createParams';

describe('Create User Controller Tests', () => {
  let controller: CreateuserController;
  let service: CreateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateuserController],
      providers: [
        {
          provide: CreateUserService,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CreateuserController>(CreateuserController);
    service = module.get<CreateUserService>(CreateUserService);
  });

  it('Controller and Service shold be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('Should execute successfully', async () => {
    jest.spyOn(service, 'execute').mockResolvedValue(createResult);
    const response = await controller.create(createParams);

    expect(service.execute).toHaveBeenCalledTimes(1);
    expect(service.execute).toHaveBeenCalledWith(createParams);
    expect(response).toEqual(createResult);
  });
});
