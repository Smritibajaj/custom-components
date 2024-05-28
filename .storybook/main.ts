const config = {
    stories: ['../src/**/*.stories.tsx'],
    framework: '@storybook/react',
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@react-theming/storybook-addon',
    ],
    core: {
      builder: '@storybook/builder-vite',
    },
    features: {
      emotionAlias: false,
    },
    async viteFinal(config, options) {
      // Add your configuration here
      return config;
    },
  };
  module.exports = config;
  