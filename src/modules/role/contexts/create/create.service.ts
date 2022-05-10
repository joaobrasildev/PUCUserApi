import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { alreadyExists } from '@shared/utils/errors';
import { CreateRoleRequestBodyDTO } from '@shared/dtos/role/createRoleRequestBody.dto';
import { RoleRepository } from '@shared/repositories/role.repository';

@Injectable()
export class CreateRoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ) {}

  async execute(requestBodyDto: CreateRoleRequestBodyDTO) {
    const findedRole = await this.repository.findByRole(requestBodyDto.name);
    if (findedRole) {
      throw new ConflictException(alreadyExists('role'));
    }
    const role = await this.repository.createRole(requestBodyDto);

    return role;
  }
}
