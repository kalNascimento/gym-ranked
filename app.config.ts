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
});
