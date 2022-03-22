import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptProvider } from '@shared/providers/encrypt/implementations/bcrypt.provider';
import { UserRepository } from '@shared/repositories/user.repository';
import {  CreateuserController } from './contexts/create/create.controller';
import {  CreateUserService } from './contexts/create/create.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    BcryptProvider
  ],
  providers: [
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider },
    CreateUserService,
  ],
  controllers: [
    CreateuserController,
  ],
})
export class UserModule {}
