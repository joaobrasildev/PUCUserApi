import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptProvider } from '@shared/providers/encrypt/implementations/bcrypt.provider';
import { UserRepository } from '@shared/repositories/user.repository';
import {  CreateuserController } from './contexts/create/create.controller';
import {  CreateUserService } from './contexts/create/create.service';
import { GetAllUserController } from './contexts/getAll/getAll.controller';
import { GetAllUserService } from './contexts/getAll/getAll.service';
import { GetOneUserController } from './contexts/getOne/getOne.controller';
import { GetOneUserService } from './contexts/getOne/getOne.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    BcryptProvider
  ],
  providers: [
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider },
    CreateUserService,
    GetAllUserService,
    GetOneUserService,
  ],
  controllers: [
    CreateuserController,
    GetAllUserController,
    GetOneUserController,
  ],
})
export class UserModule {}
