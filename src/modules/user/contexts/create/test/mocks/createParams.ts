import { User } from '@shared/database/entities/user.entity';
import { CreateUserRequestDTO } from '@shared/dtos/user/createUserRequest.dto';
import { BcryptProvider } from '@shared/providers/encrypt/implementations/bcrypt.provider';
import { UpdateResult } from 'typeorm';

let date = new Date();
let bcryptProvider = new BcryptProvider();
let password = bcryptProvider.createHash("Teste@123")
export const createParams: CreateUserRequestDTO = {
  name: "Name",
  lastName: "Last Name",
  email: "email@teste.com",
  password: "Teste@123",
  cpf: "11030475660",
  birthDate: date,
  phoneNumber: "99999999999",
  nickName: "JVOB",
  gender: "Masculino" 
}

export const createResult: User = {
  id: "6cbd54cb-94ff-44d5-8d65-c63ddde7344b",
  name: "Name",
  lastName: "Last Name",
  email: "email@teste.com",
  password: "Teste@123",
  cpf: "11030475660",
  birthDate: date,
  phoneNumber: "99999999999",
  nickName: "JVOB",
  gender: "Masculino",
  active: false,
  approved: false,
  createdAt: date,
  updatedAt: date,
  deletedAt: undefined
};
