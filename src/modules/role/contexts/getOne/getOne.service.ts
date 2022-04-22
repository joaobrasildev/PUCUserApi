import { Injectable } from '@nestjs/common';
import { RoleRepository } from '@shared/repositories/role.repository';

@Injectable()
export class GetOneRoleService {
  constructor(private repository: RoleRepository) {}

  async execute(id: string) {
    const findedRole = await this.repository.findOneRole(id);

    return findedRole;
  }
}
