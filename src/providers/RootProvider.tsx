import type { FC, PropsWithChildren } from 'react';
import { Provider as StoreProvider } from 'react-redux';

import AntdThemeProvider from '~/providers/AntdThemeProvider';
import ThemeProvider from '~/providers/ThemeProvider';
import store from '~/store';

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <StoreProvider store={store}>
        <AntdThemeProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AntdThemeProvider>
      </StoreProvider>
    </>
  );
};

export default RootProvider;
