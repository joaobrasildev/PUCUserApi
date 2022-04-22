import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { apiTags } from '@shared/constants/apiTags';
import { GetOneDTO } from '@shared/dtos/getOne.dto';
import { DeleteRoleService } from './delete.service';

@ApiTags(apiTags.ROLE)
@Controller('roles')
export class DeleteRoleController {
  constructor(private deleteRoleService: DeleteRoleService) {}
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async active(@Param('id') id: GetOneDTO) {
    return await this.deleteRoleService.execute(id);
  }
}
