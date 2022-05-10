import { Injectable } from '@nestjs/common';
import { RoleRepository } from '@shared/repositories/role.repository';

@Injectable()
export class GetAllRoleService {
  constructor(private repository: RoleRepository) {}

  async execute() {
    const findedRoles = await this.repository.findAllRole();

    return findedRoles;
  }
}
