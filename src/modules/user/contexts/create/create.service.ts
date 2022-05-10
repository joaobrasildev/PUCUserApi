import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alreadyExists } from '@shared/utils/errors';
import { CreateUserRequestDTO } from '@shared/dtos/user/createUserRequest.dto';
import { BcryptProvider } from '@shared/providers/encrypt/implementations/bcrypt.provider';
import { UserRepository } from '@shared/repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(UserRepository)
    private repository: UserRepository,
    @Inject('ENCRYPT_PROVIDER')
    private encryption: BcryptProvider,
  ) {}

  async execute(dto: CreateUserRequestDTO) {
    let findedUser = await this.repository.findByEmail(dto.email);

    if (findedUser) {
      throw new ConflictException(alreadyExists('email'));
    }

    findedUser = await this.repository.findByCpf(dto.cpf);
    if (findedUser) {
      throw new ConflictException(alreadyExists('cpf'));
    }

    const hashedPassword = await this.encryption.createHash(
      dto.password,
    );

    const user = await this.repository.createUser({
      ...dto,
      password: hashedPassword,
    });

    return user;
  }
}
