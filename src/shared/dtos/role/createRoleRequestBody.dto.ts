import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

export class CreateRoleRequestBodyDTO {
  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty()
  name: string;
}
