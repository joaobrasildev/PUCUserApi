import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from '@shared/repositories/role.repository';
import { CreateRoleController } from './contexts/create/create.controller';
import { CreateRoleService } from './contexts/create/create.service';
import { DeleteRoleController } from './contexts/delete/delete.controller';
import { DeleteRoleService } from './contexts/delete/delete.service';
import { GetAllRoleController } from './contexts/getAll/getAll.controller';
import { GetAllRoleService } from './contexts/getAll/getAll.service';
import { GetOneRoleController } from './contexts/getOne/getOne.controller';
import { GetOneRoleService } from './contexts/getOne/getOne.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  providers: [
    CreateRoleService,
    GetOneRoleService,
    GetAllRoleService,
    DeleteRoleService,
  ],
  controllers: [
    CreateRoleController,
    GetOneRoleController,
    GetAllRoleController,
    DeleteRoleController,
  ],
})
export class RoleModule {}
