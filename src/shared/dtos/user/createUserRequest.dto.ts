import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateUserRequestDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()  
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()  
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()  
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()  
  cpf: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()  
  birthDate: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()  
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()  
  nickName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()  
  gender: string;
}