import { Module } from '@nestjs/common';
import { BcryptProvider } from './implementations/bcrypt.provider';
import { ENCRYPT_PROVIDER } from '@shared/constants/common';

@Module({
  providers: [
    {
      provide: ENCRYPT_PROVIDER,
      useClass: BcryptProvider,
    },
  ],
  exports: [ENCRYPT_PROVIDER],
})
export class EncryptProviderModule {}
