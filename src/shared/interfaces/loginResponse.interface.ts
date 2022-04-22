import { User } from '@shared/database/entities/user.entity';

export interface LoginResponse {
  user: User;
  accessToken: string;
}
