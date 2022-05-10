import { ApiProperty } from '@nestjs/swagger';
import { roles } from '@shared/types/role';
import { Column } from 'typeorm';

export class GetAllRoleResponseDTO {
  @ApiProperty()
  @Column({ nullable: false })
  name: roles;
}
