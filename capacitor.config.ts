import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'multibrew.coffee',
  appName: 'multibrew',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
