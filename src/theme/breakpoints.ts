import { baseTheme } from '@chakra-ui/theme';

export const breakpoints = baseTheme.breakpoints;

export const mediaQueries = {
  MOBILE: `(max-width: ${breakpoints.md})`,
  ABOVE_MOBILE: `(min-width: ${breakpoints.md})`,
  TABLET_AND_BELOW: `(max-width: ${breakpoints.lg})`,
};
