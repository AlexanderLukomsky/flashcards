import type { Preview } from '@storybook/react';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '../src/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'var(--color-dark-900)',
        },
        {
          name: 'light',
          value: 'var(--color-light-100)',
        },
      ],
    },
  },
};

export default preview;
