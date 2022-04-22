import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';

import { Response, Request } from 'express';
import { SigninService } from './signin.service';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SigninRequestDTO } from './signinRequest.dto';
import { invalidCredentials } from '@shared/utils/errors';
import { apiTags } from '@shared/constants/apiTags';
import { instanceToInstance } from 'class-transformer';
import { User } from '@shared/database/entities/user.entity';

@ApiTags(apiTags.AUTH)
@Controller('auth')
export class SigninController {
  constructor(
    private signinService: SigninService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({ type: User })
  @ApiOperation({ summary: 'User login' })
  @ApiUnauthorizedResponse({
    description: invalidCredentials,
  })
  @Post('sessions')
  public async handle(
    @Body() signinRequestDTO: SigninRequestDTO,
  ) {
    const { login, password } = signinRequestDTO;
    const { user, accessToken } =
      await this.signinService.execute(login, password);

    return { user: instanceToInstance(user), accessToken: accessToken};
  }
}
