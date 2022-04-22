import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENCRYPT_PROVIDER } from '@shared/constants/common';
import { jwtConstants } from '@shared/constants/jwt';
import { BcryptProvider } from '@shared/providers/encrypt/implementations/bcrypt.provider';
import { UserRepository } from '@shared/repositories/user.repository';
import { SigninController } from './signin.controller';
import { SigninService } from './signin.service';


@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '5d' },
  }),
  PassportModule,
  ],
  providers: [
    SigninService,
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider }
  ],
  controllers: [
    SigninController,
  ],
})
export class AuthModule {}
