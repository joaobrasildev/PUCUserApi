import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { userGetOneResult } from '@shared/mocks/account.mock';
import { CreateUserService } from '../create.service';
import { UserRepository } from '@shared/repositories/user.repository';
import { createParams, createResult } from './mocks/createParams';
import { BcryptProvider } from '@shared/providers/encrypt/implementations/bcrypt.provider';

describe('Create User Service Tests', () => {
  let service: CreateUserService;
  let repository: UserRepository;
  let bcryptProvider: BcryptProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        CreateUserService,
        {
          provide: getRepositoryToken(UserRepository),
          useValue: {
            createUser: jest.fn(),
            findByEmail: jest.fn(),
            findByCpf: jest.fn(),
          },
        },
        BcryptProvider,
        { 
          provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider,
          useValue: {
            createHash: jest.fn()
          }
        }
      ],
      
    }).compile();

    service = module.get<CreateUserService>(CreateUserService);
    repository = await module.resolve<UserRepository>(UserRepository);
    bcryptProvider = module.get<BcryptProvider>(BcryptProvider)
  });

  it('Service and Repository should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
    expect(bcryptProvider).toBeDefined();
  });

  it('Should create an User successfully', async () => {
    jest
      .spyOn(repository, 'findByEmail')
      .mockResolvedValue(undefined);
    jest
      .spyOn(repository, 'findByCpf')
      .mockResolvedValue(undefined);      
    jest.spyOn(repository, 'createUser').mockResolvedValue(createResult);

    await service.execute(createParams);

    expect(repository.findByEmail).toHaveBeenCalledTimes(1);
    expect(repository.findByCpf).toHaveBeenCalledTimes(1);
    expect(repository.createUser).toHaveBeenCalledTimes(1);
  });

  it('Should create an User with exists email already-exists error', async () => {
    jest.spyOn(repository, 'findByEmail').mockResolvedValue(userGetOneResult);
    jest.spyOn(repository, 'createUser');

    expect(async () => await service.execute(createParams)).rejects.toThrow(
      'email-already-exists',
    );

    expect(repository.findByEmail).toHaveBeenCalledTimes(1);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
