import { User } from '@shared/database/entities/user.entity';
import { CreateUserDTO } from '@shared/dtos/user/createUser.dto';
import { UpdateUserDTO } from '@shared/dtos/user/updateUser.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(dto: CreateUserDTO): Promise<User> {
    const user = await this.create(dto);
    return await this.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.findOne({ email });
  }

  async findByCpf(cpf: string): Promise<User | undefined> {
    return await this.findOne({ cpf });
  }

  async findAllUsers(): Promise<User[]> {
    let users = await this.find();
    return users.length === 0 ? users : [];
  }

  async findOneUser(id: string): Promise<User | undefined> {
    return await this.findOne(
      { id }
    );
  }

  async updateUser(dto: UpdateUserDTO): Promise<void> {
    await this.update(dto.id, dto);
  }

  async activeDeactivate(id: string, active: boolean): Promise<void> {
    await this.update(id, { active });
  }

  async approveDisapprove(
    id: string,
    approved: boolean,
  ): Promise<void> {
    await this.update(id, { approved });
  }

  async deleteUser(id: string): Promise<void> {
    await this.delete(id);
  }
}
