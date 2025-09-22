// @ts-check
import prettierConfig from '@javalce/prettier-config';

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  ...prettierConfig,
  tailwindStylesheet: './src/index.css',
  plugins: ['prettier-plugin-tailwindcss'],
};
