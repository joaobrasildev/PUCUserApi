import { Injectable, NotFoundException } from '@nestjs/common';
import { notFound } from '@shared/utils/errors';
import { RoleRepository } from '@shared/repositories/role.repository';
import { GetOneDTO } from '@shared/dtos/getOne.dto';

@Injectable()
export class DeleteRoleService {
  constructor(private repository: RoleRepository) {}

  async execute(id: GetOneDTO) {
    return this.repository.deleteRole(id);
  }
}
