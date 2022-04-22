import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { IEncryptProvider } from '@shared/providers/encrypt/models/encryptProvider.interface';

import {
  usernameOrPasswordInvalid,
  withoutPermission,
} from '@shared/utils/errors';
import { ENCRYPT_PROVIDER } from '@shared/constants/common';
import { LoginResponse } from '@shared/interfaces/loginResponse.interface';
import { validateEmail } from '@shared/utils/emailValidate';
import { UserRepository } from '@shared/repositories/user.repository';
import { BcryptProvider } from '@shared/providers/encrypt/implementations/bcrypt.provider';

@Injectable()
export class SigninService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @Inject(JwtService)
    private jwtService: JwtService,
    @Inject('ENCRYPT_PROVIDER') 
    private encryption: BcryptProvider,

  ) {}

  public async execute(
    login: string,
    password: string,
  ): Promise<LoginResponse> {
    let user;
    const isEmail = validateEmail(login);
    if (isEmail) {
      user = await this.userRepository.findByEmail(login);
    } else {
      user = await this.userRepository.findByCpf(login);
    }

    if (!user) {
      throw new UnauthorizedException(usernameOrPasswordInvalid);
    }

    const passwordMatched = await this.encryption.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new UnauthorizedException(usernameOrPasswordInvalid);
    }

    const payload = { userId: user.id };

    const accessToken = this.jwtService.sign(payload);


    return { user, accessToken };
  }
}
