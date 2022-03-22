import { Injectable } from '@nestjs/common';
import { UserRepository } from '@shared/repositories/user.repository';

@Injectable()
export class GetAllUserService {
  constructor(private repository: UserRepository) {}

  async execute() {
    return await this.repository.findAllUsers();
  }
}
