export enum TypeToken {
  LOGIN_TOKEN = 'login',
  REFRESH_JWT_TOKEN = 'refresh-jwt-token',
  CONFIRM_ACCOUNT_JWT_TOKEN = 'confirm-account',
  JWT = 'jwt',
}

export const ENCRYPT_PROVIDER = 'ENCRYPT_PROVIDER';
export const jwtRegEx = /^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$/;
