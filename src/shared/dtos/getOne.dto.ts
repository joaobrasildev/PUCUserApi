import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class GetOneDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}