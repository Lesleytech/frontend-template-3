import { ConfigProvider, theme, ThemeConfig } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { useColorMode } from '~/hooks/useColorMode';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { mediaQueries } from '~/theme/breakpoints';
import { getComponentsConfig } from '~/theme/components';
import { darkToken } from '~/theme/tokens/token.dark';
import { defaultToken } from '~/theme/tokens/token.default';
import { lightToken } from '~/theme/tokens/token.light';

const AntdThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery(mediaQueries.MOBILE);
  const { isLightMode, resolvedColorMode } = useColorMode();

  const token: ThemeConfig['token'] = {
    ...defaultToken,
    ...(isLightMode ? lightToken : darkToken),
    fontSize: isMobile ? 14 : 16,
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isLightMode ? theme.defaultAlgorithm : theme.darkAlgorithm,
        token,
        components: getComponentsConfig({ token, colorMode: resolvedColorMode, isMobile }),
      }}>
      {children}
    </ConfigProvider>
  );
};

export default AntdThemeProvider;
