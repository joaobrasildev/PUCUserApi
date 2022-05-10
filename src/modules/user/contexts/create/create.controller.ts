import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserRequestDTO } from '@shared/dtos/user/createUserRequest.dto';
import { CreateUserService } from './create.service';
import { instanceToInstance } from 'class-transformer';
import { apiTags } from '@shared/constants/apiTags';
import { User } from '@shared/database/entities/user.entity';

@ApiTags(apiTags.USER)
@Controller('users')
export class CreateuserController {
  constructor(private service: CreateUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  @ApiCreatedResponse({
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async create(
    @Body() dto: CreateUserRequestDTO,
  ) {
    const user = await this.service.execute(
      dto,
    );

    return instanceToInstance(user);
  }
}
