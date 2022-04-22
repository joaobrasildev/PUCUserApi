import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

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
  @IsDateString()
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

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  number: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  complement: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  city: string;  

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role_id: string;  

}