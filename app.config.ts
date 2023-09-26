import { ExpoConfig, ConfigContext } from 'expo/config';
import * as dotenv from 'dotenv';

const { parsed } = dotenv.config()
const env = parsed

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'gym-ranked',
  name: 'gym-ranked',
  version: '1.0.0',
  assetBundlePatterns: ['**/*'],
  android: {
    package: 'com.gymranked',
  },
  orientation: 'portrait',
  extra: {
    eas: {
      projectId: env?.EXPO_PROJECT_ID
    }
  }
});
