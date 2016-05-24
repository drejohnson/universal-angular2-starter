interface IAppConfig {
  ROOT_DIR: string;
  SRC_DIR: string;
  CLIENT_SRC: string;
  SERVER_SRC: string;
  DIST_DIR: string;
  CLIENT_DIST: string;
  SERVER_DIST: string;

  VENDOR_NAME: string;
  CLIENT_NAME: string;
  SERVER_NAME: string;

  HOST: string;
  PORT: number;

  DEBUG: string;
  ENV: string;

  GA_ID: string;
}

export const APP_CONFIG: IAppConfig = JSON.parse('<%= JSON.stringify(APP_CONFIG) %>');
