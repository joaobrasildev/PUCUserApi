import { User } from '@shared/database/entities/user.entity';
import * as faker from 'faker';
import { fakeCpf } from './fakeCpf';

const date = new Date();

export const fakeUserData = () => ({
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(
    faker.name.firstName(),
    faker.name.lastName(),
    'ioasys.com.br',
  ),
  password: '%Password11',
  cpf: fakeCpf(),
  birthDate: faker.date.past(),
  phoneNumber: faker.phone.phoneNumber(),
  nickName: 'nickTest',
  gender: 'M',
});

export const fakerUpdateUser = () => ({
  id: '',
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  cpf: fakeCpf(),
  birthDate: faker.date.past(),
  phoneNumber: faker.phone.phoneNumber(),
  nickName: 'nickTest',
  gender: 'M',
});

export const userGetOneResult: User = {
  id: '',
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.datatype.string(),
  password: faker.datatype.string(),
  cpf: faker.datatype.string(),
  birthDate: faker.date.past(),
  phoneNumber: faker.phone.phoneNumber(),
  nickName: 'nickTest',
  gender: 'M',
  active: faker.datatype.boolean(true),
  approved: faker.datatype.boolean(false),
  createdAt: date,
  updatedAt: date,
  deletedAt: date,
};
