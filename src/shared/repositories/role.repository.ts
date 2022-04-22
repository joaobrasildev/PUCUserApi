import { Role } from '@shared/database/entities/role.entity';
import { GetOneDTO } from '@shared/dtos/getOne.dto';
import { CreateRoleDTO } from '@shared/dtos/role/createRole.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
  async createRole(dto: CreateRoleDTO): Promise<Role> {
    const role = await this.create(dto);

    return this.save(role);
  }

  async findByRole(name: string): Promise<Role | undefined> {
    return this.findOne({ name });
  }

  async findOneRole(id: string): Promise<Role | undefined> {
    return this.findOne({ id });
  }

  async findAllRole(): Promise<Role[]> {
    return await this.find();
  }

  async deleteRole(id: GetOneDTO): Promise<void> {
    this.delete(id);
  }
}
