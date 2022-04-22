import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '@shared/repositories/user.repository';
import { alreadyExists, notFound } from '@shared/utils/errors';

@Injectable()
export class GetOneUserService {
  constructor(private repository: UserRepository) {}

  async execute(id: string) {
    const findedUser = await this.repository.findOneUser(id);

    if(!findedUser) {
      throw new NotFoundException(notFound('user'));
    } else {  
      return findedUser;
    }
  }
}
