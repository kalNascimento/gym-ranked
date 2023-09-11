import { ExpoConfig, ConfigContext } from 'expo/config';

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
      projectId: "3fd6cfa3-bcd5-4551-90f2-31742b930548"
    }
  }
});
