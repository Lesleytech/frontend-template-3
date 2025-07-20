import { theme } from '@chakra-ui/theme';
import { merge } from 'lodash-es';
import { DeepPartial } from 'utility-types';

export const chakraTheme = merge(theme, {
  colors: {
    gray: {
      50: '#f8f8f8',
      100: '#f2f2f2',
      200: '#e6e6e6',
      300: '#d9d9d9',
      400: '#bfbfbf',
      500: '#a6a6a6',
      600: '#8c8c8c',
      700: '#737373',
      800: '#595959',
      900: '#404040',
    },
    purple: {
      50: '#F5F3FF',
      100: '#EDE9FE',
      200: '#DDD6FE',
      300: '#C4B5FD',
      400: '#A78BFA',
      500: '#8B5CF6',
      600: '#7C3AED',
      700: '#6D28D9',
      800: '#5B21B6',
      900: '#4C1D95',
      950: '#2E1065',
    },
  },
} as DeepPartial<typeof theme>);
