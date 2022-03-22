import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import {  ApiFoundResponse, ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetAllUserService } from './getAll.service';
import { apiTags } from '@shared/constants/apiTags';
import { User } from '@shared/database/entities/user.entity';

@ApiTags(apiTags.USER)
@Controller('users')
export class GetAllUserController {
  constructor(private service: GetAllUserService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiFoundResponse({
      type: [User]
  })
  public async getAll() {
    const users = await this.service.execute();
 
    return instanceToInstance(users);
  }
}
