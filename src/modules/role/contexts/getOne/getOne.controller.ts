import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllRoleResponseDTO } from '@shared/dtos/role/getAllRoleRespose.dto';
import { GetOneRoleService } from './getOne.service';
import { apiTags } from '@shared/constants/apiTags';

@ApiTags(apiTags.ROLE)
@Controller('roles')
export class GetOneRoleController {
  constructor(private getOneRoleService: GetOneRoleService) {}
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
    type: GetAllRoleResponseDTO,
  })
  async getOne(@Param('id') id: string) {
    const role = await this.getOneRoleService.execute(id);

    return instanceToInstance(role);
  }
}
