import * as bcrypt from 'bcryptjs';
import { IEncryptProvider } from '../models/encryptProvider.interface';

export class BcryptProvider implements IEncryptProvider {
  createHash(text: string): string {
    return bcrypt.hashSync(text, 10);
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(payload, hashed);
  }
}
