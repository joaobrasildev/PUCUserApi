import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { GetOneUserService } from './getOne.service';
import { apiTags } from '@shared/constants/apiTags';

@ApiTags(apiTags.USER)
@Controller('users')
export class GetOneUserController {
  constructor(private getOneUserservice: GetOneUserService) {}
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id') id: string) {
    const user = await this.getOneUserservice.execute(id);

    return instanceToInstance(user);
  }
}
