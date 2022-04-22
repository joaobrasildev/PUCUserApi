import { IsNotEmpty, IsEmail } from 'class-validator';

export class SigninRequestDTO {
  @IsNotEmpty()
  @IsEmail()
  login: string;

  @IsNotEmpty()
  password: string;
}
