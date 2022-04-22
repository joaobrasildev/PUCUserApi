import { AuthModule } from '@modules/auth/signin.module';
import { RoleModule } from '@modules/role/role.module';
import { UserModule } from '@modules/user/user.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncryptProviderModule } from '@shared/providers/encrypt/encryptProvider.module';
import envConfig from './config/env';
import { getDatabaseConfigConnection } from './config/env/connection';

const databaseOptions = {
  ...getDatabaseConfigConnection(),
};
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseOptions),
    UserModule,
    EncryptProviderModule,
    RoleModule,
    AuthModule
  ],
})
export class AppModule {}
