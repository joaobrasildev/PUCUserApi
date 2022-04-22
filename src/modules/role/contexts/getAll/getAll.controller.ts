import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllRoleResponseDTO } from '@shared/dtos/role/getAllRoleRespose.dto';
import { GetAllRoleService } from './getAll.service';
import { apiTags } from '@shared/constants/apiTags';

@ApiTags(apiTags.ROLE)
@Controller('roles')
export class GetAllRoleController {
  constructor(private getAllRoleService: GetAllRoleService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: GetAllRoleResponseDTO,
  })
  public async getAll() {
    const roles = await this.getAllRoleService.execute();
    const rolesResponse = [];

    for await (const record of roles) {
      rolesResponse.push(record);
    }

    return instanceToInstance(rolesResponse);
  }
}
