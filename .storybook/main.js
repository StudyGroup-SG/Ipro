const custom = require('../config/webpack/webpack.common');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    const {
      module: { rules },
      resolve: { alias },
    } = custom;

    return {
      ...config,
      module: { ...config.module, rules },
      resolve: {
        ...config.resolve,
        alias,
      },
    };
  },
};
