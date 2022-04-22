import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateRoleRequestBodyDTO } from '@shared/dtos/role/createRoleRequestBody.dto';
import { CreateRoleService } from './create.service';
import { apiTags } from '@shared/constants/apiTags';

@ApiTags(apiTags.ROLE)
@Controller('roles')
export class CreateRoleController {
  constructor(private createRoleService: CreateRoleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @ApiCreatedResponse({
    type: CreateRoleRequestBodyDTO,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async create(
    @Body() createRoleRequestBodyDTO: CreateRoleRequestBodyDTO,
  ) {
    const role = await this.createRoleService.execute(createRoleRequestBodyDTO);

    return instanceToInstance(role);
  }
}
