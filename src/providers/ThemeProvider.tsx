import { ChakraProvider } from '@chakra-ui/provider';
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from 'antd';
import { type FC, type PropsWithChildren, useEffect, useMemo } from 'react';

import { useAppSelector } from '~/hooks/useAppSelector';
import { getResolvedColorMode } from '~/lib/helpers/ui';
import { chakraTheme } from '~/theme/chakraTheme';
import { antdOverridesStyles } from '~/theme/styles/antd.overrides';
import { globalStyles } from '~/theme/styles/global';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { token } = theme.useToken();
  const colorMode = useAppSelector((state) => state.ui.colorMode);

  const colors = useMemo(() => Object.fromEntries(Object.entries(token)), [token]);

  useEffect(() => {
    const resolvedColorMode = getResolvedColorMode(colorMode);

    document.documentElement.setAttribute('data-theme', resolvedColorMode);
    document.documentElement.style.colorScheme = resolvedColorMode;
    document.body.classList.remove('chakra-ui-light', 'chakra-ui-dark');
    document.body.classList.add(`chakra-ui-${resolvedColorMode}`);
  }, [colorMode]);

  return (
    <EmotionThemeProvider theme={token}>
      <ChakraProvider
        theme={{ ...chakraTheme, colors: { ...chakraTheme.colors, ...colors } }}
        disableGlobalStyle>
        {children}
      </ChakraProvider>
      <Global styles={globalStyles(token)} />
      <Global styles={antdOverridesStyles(token)} />
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
